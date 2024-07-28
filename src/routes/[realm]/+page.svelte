<script lang="ts">
    import { page } from "$app/stores";
    import { onMount, onDestroy } from "svelte";
    import { dev } from "$app/environment";
    import { toASCII } from "punycode";

    export let data;
    let { realm, meta, profile, realmData, error } = data;

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
</script>

<div class="text-lg">
    <Base {realm} debug={dev} {realmData} {meta} {profile} />
</div>
