<script lang="ts">
    import { page } from "$app/stores";
    import { get } from "svelte/store";
    import { onMount } from "svelte";

    import { fetchResult } from "$lib/protocols/atomicals/vanilla";
    import type { ProfileBase, Meta, RealmData } from "$lib/interfaces/Result";

    $: realm = get(page).params.realm;

    let debug = import.meta.env.MODE === "development";

    let error: string | null = null;
    let isLoading: boolean = false;
    let realmData: RealmData | null = null;
    let meta: Meta | null = null;
    let profile: ProfileBase | null = null;
    let isDk: boolean = false;

    onMount(async () => {
        try {
            isLoading = true;
            const result = await fetchResult(realm);
            meta = result?.meta;
            profile = result?.profile;
            realmData = result?.realm;

            let v = meta?.v ?? "1.2.0";
            isDk = v.endsWith("dk");
            error = null;
        } catch (e) {
            error = (e as Error).message;
        } finally {
            realmData = { id: "", realm: realm, pid: "" };
            isLoading = false;
        }
    });

    import V12 from "$lib/components/realm/Base.svelte";
    import DK from "$lib/components/realm/DK.svelte";
    import Wallet from "$lib/components/Wallet.svelte";
    import LocalServer from "$lib/components/LocalServer.svelte";
</script>

{#if isDk}
    <DK {realm} {debug} {isLoading} {realmData} {profile} />
{:else}
    <V12 {realm} {debug} {isLoading} {realmData} {profile} />
{/if}

{#if debug}
    <LocalServer />
    <Wallet />
{/if}
