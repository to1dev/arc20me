<script lang="ts">
    import { page } from "$app/stores";
    import { onMount } from "svelte";
    import { isDk, debug } from "$lib/stores/Realm";
    import { fetchResult } from "$lib/protocols/atomicals/vanilla";
    import type { ProfileBase, Meta, RealmData } from "$lib/interfaces/Result";
    import punycode from "punycode/";

    import V12 from "$lib/components/realm/Base.svelte";
    import DK from "$lib/components/realm/DK.svelte";

    $: realm = punycode.toASCII($page.params.realm).trim().toLowerCase();

    let _debug = $debug;

    let error: string | null = null;
    let isLoading: boolean = false;
    let realmData: RealmData | null = null;
    let meta: Meta | null = null;
    let profile: ProfileBase | null = null;

    onMount(async () => {
        try {
            isLoading = true;
            const data = await fetchResult(realm);
            const result = await data.json();
            /*const data: any = await fetch(
                `https://ep2.to1.dev/api/realm/${realm}`
            );
            const result = await data.json();*/
            meta = result?.meta;
            profile = result?.profile;

            let v = meta?.v ?? "1.2.0";
            isDk.set(v.endsWith("dk"));
            error = null;
        } catch (e) {
            error = (e as Error).message;
        } finally {
            realmData = { realm: realm };
            isLoading = false;
        }
    });
</script>

{#if $isDk}
    <DK {realm} debug={_debug} {realmData} {meta} {profile} />
{:else}
    <V12 {realm} debug={_debug} {realmData} {meta} {profile} />
{/if}
