import type {
    ResponseResult,
    Info,
    ProfileBase,
    Meta,
} from "$lib/interfaces/Result";
import {
    PUBLIC_ELECTRUMX_BASE_URL,
    PUBLIC_ELECTRUMX_ENDPOINT1,
    PUBLIC_ELECTRUMX_ENDPOINT2,
    PUBLIC_ELECTRUMX_ENDPOINT3,
} from "$env/static/public";

export async function fetchRealmAtomicalId(
    realm: string
): Promise<{ id: string | null }> {
    const baseUrl = PUBLIC_ELECTRUMX_BASE_URL;
    const endpoint = PUBLIC_ELECTRUMX_ENDPOINT1;
    const url: string = `${baseUrl}${endpoint}?params=["${realm}"]`;

    try {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Error fetching data: ${res.statusText}`);
        }

        const data = await res.json();
        const id = data.response?.result?.atomical_id;
        if (!id) {
            return {
                id: null,
            };
        }

        return {
            id,
        };
    } catch (error) {
        console.error("Failed to fetch realm info:", error);
        return {
            id: null,
        };
    }
}

interface JsonData {
    [key: string]: any;
}

async function findFirstDKeyValue(
    dataArray: JsonData[]
): Promise<string | null> {
    for (const data of dataArray) {
        const result = await findDKeyValueInObject(data);
        if (result) {
            return result;
        }
    }
    return null;
}

async function findDKeyValueInObject(data: JsonData): Promise<string | null> {
    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            const value = data[key];
            if (key === "d") {
                return value;
            } else if (typeof value === "object" && value !== null) {
                const result = await findDKeyValueInObject(value);
                if (result) {
                    return result;
                }
            }
        }
    }
    return null;
}

async function findObjectWithKey(
    data: JsonData,
    targetKey: string
): Promise<JsonData | null> {
    if (typeof data !== "object" || data === null) {
        return null;
    }

    if (targetKey in data) {
        return data;
    }

    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            const result = await findObjectWithKey(data[key], targetKey);
            if (result) {
                return result;
            }
        }
    }

    return null;
}

async function extractImages(
    data: JsonData,
    result: string[] = []
): Promise<string[]> {
    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            const value = data[key];
            if (key === "image" || key === "img") {
                result.push(value);
            } else if (typeof value === "object" && value !== null) {
                await extractImages(value, result);
            }
        }
    }
    return result;
}

export async function fetchRealmProfileId(
    id: string
): Promise<{ pid: string | null }> {
    const baseUrl = PUBLIC_ELECTRUMX_BASE_URL;
    const endpoint = PUBLIC_ELECTRUMX_ENDPOINT2;
    const url: string = `${baseUrl}${endpoint}?params=["${id}",10,0,"mod"]`;

    try {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Error fetching data: ${res.statusText}`);
        }

        const data: ResponseResult = await res.json();

        if (
            Array.isArray(data.response?.result) &&
            data.response.result.length > 0
        ) {
            const pid = await findFirstDKeyValue(data.response.result);
            if (pid) {
                return { pid };
            }
        }

        return {
            pid: null,
        };
    } catch (error) {
        console.error("Failed to fetch realm info:", error);
        return {
            pid: null,
        };
    }
}

export async function fetchRealmProfile(
    id: string
): Promise<{ profile: ProfileBase | null }> {
    const baseUrl = PUBLIC_ELECTRUMX_BASE_URL;
    const endpoint = PUBLIC_ELECTRUMX_ENDPOINT3;
    const url: string = `${baseUrl}${endpoint}?params=["${id}"]`;

    try {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Error fetching data: ${res.statusText}`);
        }

        const data = await res.json();
        const profile = await findObjectWithKey(
            data.response?.result?.mint_data?.fields,
            "v"
        );

        return {
            profile: profile ? (profile as ProfileBase) : null,
        };
    } catch (error) {
        console.error("Failed to fetch realm info:", error);
        return {
            profile: null,
        };
    }
}

export async function fetchResult(realm: string): Promise<{
    meta: Meta | null;
    profile: ProfileBase | null;
}> {
    const _id = await fetchRealmAtomicalId(realm);
    if (!_id.id) {
        return {
            meta: { v: "", id: "", pid: "", image: "" },
            profile: null,
        };
    }

    const pid = await fetchRealmProfileId(_id.id);
    if (!pid.pid) {
        return {
            meta: { v: "", id: _id.id, pid: "", image: "" },
            profile: null,
        };
    }

    const _profile = await fetchRealmProfile(pid.pid);
    if (!_profile.profile) {
        return {
            meta: { v: "", id: _id.id, pid: pid.pid, image: "" },
            profile: null,
        };
    }

    return {
        meta: {
            v: _profile.profile?.v,
            id: _id.id,
            pid: pid.pid,
            image: _profile.profile?.image
                ? (_profile.profile?.image as string)
                : (_profile.profile?.i as string),
        },
        profile: _profile.profile,
    };
}

type AtomId = string;

export interface ParsedId {
    prefix: string;
    id: AtomId;
}

const removeDuplicatePrefixes = (line: string): string => {
    const parts = line.split(":");
    const seen = new Set<string>();
    const result: string[] = [];

    for (let i = 0; i < parts.length; i++) {
        if (!seen.has(parts[i])) {
            result.push(parts[i]);
            seen.add(parts[i]);
        }
    }

    return result.join(":");
};

export const parseAtomicalIdfromURN = (line: string): ParsedId | null => {
    const correctedLine = removeDuplicatePrefixes(line);
    const parts = correctedLine.split(":");

    if (parts.length >= 4) {
        const prefix = parts[0];
        const protocol = parts[1];
        const type = parts[2];
        const idPart = parts.slice(3).join(":");

        const id = idPart.split("/")[0]; // Remove any file extensions or paths

        return {
            prefix: prefix,
            id: id,
        };

        /*if (
            protocol === "btc" &&
            (type === "id" || type === "dat") &&
            prefix === "atom"
        ) {
        } else if (protocol === "btc" && type === "id" && prefix === "ord") {
        } else {
        }*/
    }

    return null;
};

import { base64, hex } from "@scure/base";

export function hexToBase64(
    hexString: string,
    ext: string = "image/png"
): string {
    const bytes = hex.decode(hexString);
    const b64 = base64.encode(bytes);
    return `data:${ext};base64,${b64}`;
}

export interface ParsedHexData {
    fileName: string;
    hexData: string;
}

export function extractHexData(obj: any, parentKey = ""): ParsedHexData[] {
    let result: ParsedHexData[] = [];

    if (obj && typeof obj === "object") {
        for (const key of Object.keys(obj)) {
            if (key === "$b") {
                const hexData =
                    typeof obj[key] === "string" ? obj[key] : obj[key].$b;
                if (typeof hexData === "string") {
                    result.push({ fileName: parentKey, hexData });
                }
            } else {
                result = result.concat(extractHexData(obj[key], key));
            }
        }
    }

    return result;
}
