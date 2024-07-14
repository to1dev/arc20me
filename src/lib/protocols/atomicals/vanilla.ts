import {
    findFirstDKeyValue,
    findObjectWithKey,
    extractHexData,
    scriptAddress,
} from "$lib/utils/ponytail";
import {
    PUBLIC_SEQUENCE_BASE_URL,
    PUBLIC_ELECTRUMX_BASE_URL,
    PUBLIC_ELECTRUMX_ENDPOINT1,
    PUBLIC_ELECTRUMX_ENDPOINT2,
    PUBLIC_ELECTRUMX_ENDPOINT3,
} from "$env/static/public";

export async function fetchRealmAtomicalId(realm: string): Promise<any | null> {
    const baseUrl = PUBLIC_ELECTRUMX_BASE_URL;
    const endpoint = PUBLIC_ELECTRUMX_ENDPOINT1;
    const url: string = `${baseUrl}${endpoint}?params=["${realm}"]`;

    try {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Error fetching data: ${res.statusText}`);
        }

        const data = await res.json();
        if (!data) {
            return null;
        }

        const id = data.response?.result?.atomical_id;
        const cid = data.response?.result?.candidates[0]?.atomical_id;
        if (!id) {
            if (!cid) {
                return null;
            }
            return {
                id: null,
                cid: cid,
            };
        }

        return {
            id,
            cid,
        };
    } catch (error) {
        console.error("Failed to fetch realm id:", error);
        return null;
    }
}

export async function fetchRealmProfileId(id: string): Promise<any | null> {
    const baseUrl = PUBLIC_ELECTRUMX_BASE_URL;
    const endpoint = PUBLIC_ELECTRUMX_ENDPOINT2;
    const url: string = `${baseUrl}${endpoint}?params=["${id}",10,0,"mod"]`;

    try {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Error fetching data: ${res.statusText}`);
        }

        const data = await res.json();
        if (!data) {
            return null;
        }

        if (
            Array.isArray(data?.response?.result) &&
            data?.response?.result?.length > 0
        ) {
            const pid = await findFirstDKeyValue(data?.response?.result);
            if (pid) {
                return { pid };
            }
        }

        return null;
    } catch (error) {
        console.error("Failed to fetch realm info:", error);
        return null;
    }
}

export async function fetchRealmProfile(id: string): Promise<any | null> {
    const baseUrl = PUBLIC_ELECTRUMX_BASE_URL;
    const endpoint = PUBLIC_ELECTRUMX_ENDPOINT3;
    const url: string = `${baseUrl}${endpoint}?params=["${id}"]`;

    try {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Error fetching data: ${res.statusText}`);
        }

        const data = await res.json();
        if (!data) {
            return null;
        }

        const profile = await findObjectWithKey(
            data.response?.result?.mint_data?.fields,
            "v"
        );

        if (!profile) {
            return null;
        }

        let address = scriptAddress(
            data.response?.result?.mint_info?.reveal_location_script
        );

        if (!address) {
            return {
                profile: profile,
                owner: null,
            };
        }

        return {
            profile: profile,
            owner: address,
        };
    } catch (error) {
        console.error("Failed to fetch realm info:", error);
        return null;
    }
}

interface ImageData {
    ext: string | null;
    data: string | null;
}

export async function fetchHexData(
    id: string | null | undefined
): Promise<ImageData | null> {
    const baseUrl = PUBLIC_ELECTRUMX_BASE_URL;
    const endpoint = PUBLIC_ELECTRUMX_ENDPOINT3;
    const url: string = `${baseUrl}${endpoint}?params=["${id}"]`;

    try {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Error fetching data: ${res.statusText}`);
        }

        const data = await res.json();
        if (!data) {
            return null;
        }

        const imageData = extractHexData(data.response?.result?.mint_data);

        if (imageData && imageData.length > 0) {
            const image = imageData[0];
            return {
                ext: image.ext,
                data: image.hexData,
            };
        }

        return null;
    } catch (error) {
        console.error("Failed to fetch hex data:", error);
        return null;
    }
}

export async function fetchResult(realm: string): Promise<any> {
    const _id = await fetchRealmAtomicalId(realm);
    if (!_id?.id) {
        if (!_id?.cid) {
            return {
                meta: {
                    v: null,
                    id: null,
                    cid: null,
                    pid: null,
                    image: null,
                },
                profile: null,
            };
        }

        return {
            meta: {
                v: null,
                id: null,
                cid: _id.cid,
                pid: null,
                image: null,
            },
            profile: null,
        };
    }

    const pid = await fetchRealmProfileId(_id.id);
    if (!pid?.pid) {
        return {
            meta: {
                v: null,
                id: _id.id,
                cid: _id.cid,
                pid: null,
                image: null,
            },
            profile: null,
        };
    }

    const _profile = await fetchRealmProfile(pid.pid);
    if (!_profile?.profile) {
        return {
            meta: {
                v: null,
                id: _id.id,
                cid: _id.cid,
                pid: pid.pid,
                image: null,
                po: null,
            },
            profile: null,
        };
    }

    return {
        meta: {
            v: _profile.profile?.v,
            id: _id?.id,
            cid: _id?.cid,
            pid: pid?.pid,
            image: _profile?.profile?.image
                ? (_profile?.profile?.image as string)
                : (_profile?.profile?.i as string),
            po: _profile?.owner,
        },
        profile: _profile?.profile,
    };
}

export async function sendQueue(realm: string): Promise<any> {
    const baseUrl = PUBLIC_SEQUENCE_BASE_URL;
    const url: string = `${baseUrl}${realm}`;

    try {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Error sending queue message: ${res.statusText}`);
        }
    } catch (error) {
        console.error("Failed to send queue message:", error);
        return null;
    }

    return null;
}
