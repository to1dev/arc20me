<script lang="ts">
    //import { page } from "$app/stores";
    import { dev } from "$app/environment";
    //import { toASCII } from "punycode";

    export let data;
    let { ThemeComponent, realm, meta, profile, realmData, error } = data;

    let background = meta?.background;
    let vars = `--background-image: url("${background || "/images/background.svg"}")`;

    //import Base from "$lib/components/realm/themes/Base.svelte";

    /*$: realm = toASCII($page.params.realm).trim().toLowerCase();
    const search = $page.url.search;

    let error: string | null = null;
    let isLoading: boolean = false;
    let realmData: any | null = null;
    let meta: any | null = null;
    let profile: any | null = null;

    onMount(async () => {
        try {
            isLoading = true;

            const _data: any = await fetch(
                `https://ep2.to1.dev/api/realm/${realm}${search}`
            );
            const result = await _data.json();

            meta = result?.meta;
            profile = result?.profile;

            error = null;
        } catch (e) {
            error = (e as Error).message;
        } finally {
            realmData = { realm: realm };
            isLoading = false;
        }
    });*/
</script>

<div
    class="flex flex-col lg:flex-row flex-auto min-h-screen bg-white bg-fixed bg-cover background"
    style={vars}
>
    <div class="flex-auto">
        <div class="mx-auto w-full">
            <div class="space-y-5">
                <main class="flex-1 text-base-content">
                    <div class="text-lg dynamic">
                        {#if ThemeComponent}
                            <svelte:component
                                this={ThemeComponent}
                                {realm}
                                debug={dev}
                                {realmData}
                                {meta}
                                {profile}
                            />
                        {/if}
                    </div>
                </main>
            </div>
        </div>
    </div>
</div>

<style>
    .background {
        background-image: var(--background-image);
    }

    @media (max-width: 640px) {
        .background {
            background-image: none;
        }
    }
</style>
