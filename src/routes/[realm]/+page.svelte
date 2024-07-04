<script lang="ts">
    import { page } from "$app/stores";
    import { get } from "svelte/store";
    import { onMount } from "svelte";

    import { fetchResult } from "$lib/protocols/btc/vanilla/base";
    import type { ContentBase, Meta, RealmData } from "$lib/types/Result";

    $: realm = get(page).params.realm;

    let debug = import.meta.env.MODE === "development";

    let error: string | null = null;
    let isLoading: boolean = false;
    let realmData: RealmData | null;
    let meta: Meta | null;
    let profile: ContentBase | null;

    onMount(async () => {
        try {
            isLoading = true;
            const result = await fetchResult(realm);
            meta = result?.meta;
            profile = result?.profile;
            realmData = result?.realm;
            error = null;
        } catch (e) {
            error = (e as Error).message;
        } finally {
            isLoading = false;
        }
    });

    import V11 from "$lib/components/realm/base/Version1_1.svelte";
    import V12 from "$lib/components/realm/base/Version1_2.svelte";
    import DK from "$lib/components/realm/base/Version_dk.svelte";
    import Wallet from "$lib/components/Wallet.svelte";
    import LocalServer from "$lib/components/LocalServer.svelte";
</script>

{#if meta?.v === "1.2"}
    <V12 {realm} {debug} {isLoading} {realmData} {meta} {profile} />
{:else if meta?.v === "1.1"}
    <V11 {realm} {debug} {isLoading} {realmData} {meta} {profile} />
{:else if meta?.v === "0.1.dk"}
    <DK {realm} {debug} {isLoading} {realmData} {meta} {profile} />
{:else}
    <V12 {realm} {debug} {isLoading} {realmData} {meta} {profile} />
{/if}

{#if debug}
    <LocalServer />
    <Wallet />
{/if}
