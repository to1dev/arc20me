import type { PageLoad } from "./$types";
import { toASCII } from "punycode";

export const load: PageLoad = async ({ fetch, params, url }) => {
    const realm = toASCII(params.realm).trim().toLowerCase();
    const search = url.search;

    try {
        const response = await fetch(
            `https://ep2.to1.dev/api/realm/${realm}${search}`
        );
        const result = await response.json();

        const themeMap: { [key: string]: () => Promise<any> } = {
            Base: () =>
                import("$lib/components/realm/themes/Base/index.svelte"),
        };

        let ThemeComponent: any;
        const theme = result?.meta?.theme;

        if (theme && themeMap[theme]) {
            ThemeComponent = (await themeMap[theme]()).default;
        } else {
            ThemeComponent = (await themeMap.Base()).default;
        }

        return {
            ThemeComponent,
            realm,
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
