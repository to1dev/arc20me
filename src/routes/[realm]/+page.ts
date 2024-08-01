import type { PageLoad } from "./$types";
import { toASCII } from "punycode";
import type { ComponentType } from "svelte";

export const load: PageLoad = async ({ fetch, parent }) => {
    //const realm = toASCII(params.realm).trim().toLowerCase();
    //const search = url.search;

    try {
        /*const response = await fetch(
            `https://ep2.to1.dev/api/realm/${realm}${search}`
        );
        const result = await response.json();*/

        const parentData = await parent();

        const themeMap: { [key: string]: () => Promise<any> } = {
            Base: () =>
                import("$lib/components/realm/themes/Base/index.svelte"),
        };

        let ThemeComponent: ComponentType | null = null;
        const theme = parentData?.meta?.theme || "Base";

        if (theme && themeMap[theme]) {
            ThemeComponent = (await themeMap[theme]()).default;
        } else {
            ThemeComponent = (await themeMap.Base()).default;
        }

        return {
            ThemeComponent,
            /*realm,
            meta: result?.meta,
            profile: result?.profile,
            realmData: { realm },
            error: null,*/
        };
    } catch (e) {
        return {
            ThemeComponent: null,
            /*realm: realm,
            meta: null,
            profile: null,
            realmData: { realm },
            error: (e as Error).message,*/
        };
    }
};
