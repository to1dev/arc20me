import type {
    ResponseResult,
    Info,
    Content,
    RealmData,
} from "$lib/types/Result";
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
        const id = data.response.result.atomical_id;

        return {
            id: id,
        };
    } catch (error) {
        console.error("Failed to fetch realm info:", error);
        throw error;
    }
}

export async function fetchRealmInfo(
    id: string
): Promise<{ info: Info | null }> {
    const baseUrl = PUBLIC_ELECTRUMX_BASE_URL;
    const endpoint = PUBLIC_ELECTRUMX_ENDPOINT2;
    const url: string = `${baseUrl}${endpoint}?params=["${id}",1,0,"mod"]`;

    try {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Error fetching data: ${res.statusText}`);
        }

        const data: ResponseResult = await res.json();

        if (
            data.response &&
            Array.isArray(data.response.result) &&
            data.response.result.length > 0
        ) {
            const info = data.response.result[0].info;

            if (
                info.payload &&
                info.payload.args &&
                typeof info.payload.d === "string"
            ) {
                return {
                    info: info,
                };
            }
        }

        return {
            info: null,
        };
    } catch (error) {
        console.error("Failed to fetch realm info:", error);
        return {
            info: null,
        };
    }
}

export async function fetchRealmProfile(
    id: string
): Promise<{ profile: Content | null }> {
    const baseUrl = PUBLIC_ELECTRUMX_BASE_URL;
    const endpoint = PUBLIC_ELECTRUMX_ENDPOINT3;
    const url: string = `${baseUrl}${endpoint}?params=["${id}"]`;

    try {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Error fetching data: ${res.statusText}`);
        }

        const data = await res.json();
        const profile = data.response.result.mint_data.fields;

        return {
            profile: profile,
        };
    } catch (error) {
        console.error("Failed to fetch realm info:", error);
        throw error;
    }
}

export async function fetchResult(
    realm: string
): Promise<{ realm: RealmData | null | null; profile: Content | null }> {
    let _profileId: string;

    const _id = await fetchRealmAtomicalId(realm);
    if (_id.id) {
        const _info = await fetchRealmInfo(_id.id);
        if (_info.info) {
            _profileId = _info.info.payload.d;
            const _profile = await fetchRealmProfile(_profileId);
            if (_profile.profile) {
                return {
                    realm: { id: _id.id, name: realm, pid: _profileId },
                    profile: _profile.profile,
                };
            }
        }
    }

    return {
        realm: null,
        profile: null,
    };
}
