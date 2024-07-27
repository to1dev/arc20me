import type { PageLoad } from "./$types";
import punycode from "punycode/";

export const load: PageLoad = async ({ params, url }) => {
    const realm = punycode.toASCII(params.realm).trim().toLowerCase();
    //const realm = params.realm;
    const search = url.search;

    try {
        const response = await fetch(
            `https://ep2.to1.dev/api/realm/${realm}${search}`
        );
        const result = await response.json();

        return {
            realm: realm,
            meta: result?.meta,
            profile: result?.profile,
            realmData: { realm },
            error: null,
        };
    } catch (e) {
        return {
            realm: realm,
            meta: null,
            profile: null,
            realmData: { realm },
            error: (e as Error).message,
        };
    }
};
