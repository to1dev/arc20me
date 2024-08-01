import type { LayoutServerLoad } from "./$types";
import { toASCII } from "punycode";

export const load: LayoutServerLoad = async ({
    fetch,
    params,
    url,
    platform,
}) => {
    const realm = toASCII(params.realm).trim().toLowerCase();
    const search = url.search;

    try {
        const response = await fetch(
            `https://ep2.to1.dev/api/realm/${realm}${search}`
        );
        const result = await response.json();

        let result2: any | null = null;
        if (platform) {
            const response2 = await platform?.env?.MY_SERVICE.realm(realm);
            result2 = JSON.parse(response2);
        }

        return {
            realm,
            result2,
            meta: result?.meta,
            profile: result?.profile,
            realmData: { realm },
        };
    } catch (e) {
        return {
            realm: realm,
            meta: null,
            profile: null,
            realmData: { realm },
        };
    }
};
