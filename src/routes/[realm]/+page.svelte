<script lang="ts">
    import { page } from "$app/stores";
    import { onMount } from "svelte";
    import { isDk } from "$lib/stores/Realm";
    import { fetchResult } from "$lib/protocols/atomicals/vanilla";
    import type { ProfileBase, Meta, RealmData } from "$lib/interfaces/Result";
    import punycode from "punycode/";

    import Purse from "$lib/components/Purse.svelte";
    import V12 from "$lib/components/realm/Base.svelte";
    import DK from "$lib/components/realm/DK.svelte";

    $: realm = punycode.toASCII($page.params.realm.toLowerCase());

    let debug = import.meta.env.MODE === "development";
    debug = false;

    let error: string | null = null;
    let isLoading: boolean = false;
    let realmData: RealmData | null = null;
    let meta: Meta | null = null;
    let profile: ProfileBase | null = null;

    onMount(async () => {
        try {
            isLoading = true;
            const result = await fetchResult(realm);
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

<Purse />

{#if $isDk}
    <DK {realm} {debug} {realmData} {meta} {profile} />
{:else}
    <V12 {realm} {debug} {realmData} {meta} {profile} />
{/if}
