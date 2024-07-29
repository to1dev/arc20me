<script lang="ts">
    //import { page } from "$app/stores";
    import { onMount } from "svelte";
    import { dev } from "$app/environment";
    //import { toASCII } from "punycode";

    export let data;
    let { realm, meta, profile, realmData, error } = data;

    let background = meta?.background;

    const backgroundStyle = `
        background-image: url("${background ? background : "/images/background.svg"}");
        background-attachment: fixed;
        background-size: cover;
    `;

    import Base from "$lib/components/realm/themes/Base.svelte";

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

    let isMobile: boolean = false;
    function onResize() {
        if (window.innerWidth <= 640) {
            isMobile = true;
        } else {
            isMobile = false;
        }
    }

    onMount(() => {
        onResize();
    });
</script>

<svelte:window on:resize={onResize} />

<div
    class="flex flex-col lg:flex-row flex-auto min-h-screen bg-white"
    style={isMobile ? "" : backgroundStyle}
>
    <div class="flex-auto">
        <div class="mx-auto w-full">
            <div class="space-y-5">
                <main class="flex-1 text-base-content">
                    <div class="text-lg">
                        <Base
                            {realm}
                            debug={dev}
                            {realmData}
                            {meta}
                            {profile}
                        />
                    </div>
                </main>
            </div>
        </div>
    </div>
</div>

<style>
</style>
