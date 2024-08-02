import type { PageLoad } from "./$types";
import type { ComponentType } from "svelte";

export const load: PageLoad = async ({ fetch, parent }) => {
    try {
        const { realm, query, meta } = await parent();

        const themeMap: { [key: string]: () => Promise<any> } = {
            Base: () =>
                import("$lib/components/realm/themes/Base/index.svelte"),
            Minimal: () =>
                import("$lib/components/realm/themes/Minimal/index.svelte"),
        };

        let ThemeComponent: ComponentType | null = null;
        const theme = meta?.theme || query?.theme || "Base";

        if (theme && themeMap[theme]) {
            ThemeComponent = (await themeMap[theme]()).default;
        } else {
            ThemeComponent = (await themeMap.Base()).default;
        }

        return {
            ThemeComponent,
        };
    } catch (e) {
        return {
            ThemeComponent: null,
        };
    }
};
