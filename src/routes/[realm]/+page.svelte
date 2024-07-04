<script lang="ts">
    import { SemVer } from "semver";

    import { page } from "$app/stores";
    import { get } from "svelte/store";
    import { onMount } from "svelte";

    import { fetchResult } from "$lib/protocols/btc/vanilla/base";
    import type { Content, RealmData } from "$lib/types/Result";

    $: realm = get(page).params.realm;

    let debug = import.meta.env.MODE === "development";

    let error: string | null = null;
    let isLoading: boolean = false;
    let realmData: RealmData;
    let profile: Content;

    onMount(async () => {
        try {
            isLoading = true;
            const result = await fetchResult(realm);
            if (result.profile) {
                profile = result.profile;
            }
            if (result.realm) {
                realmData = result.realm;
            }
            error = null;
        } catch (e) {
            error = (e as Error).message;
        } finally {
            isLoading = false;
        }
    });

    import Realm from "$lib/components/dk/Realm.svelte";
    import Wallet from "$lib/components/Wallet.svelte";
    import LocalServer from "$lib/components/LocalServer.svelte";
</script>

<Realm {realm} {debug} {isLoading} {realmData} {profile} />
{#if debug}
    <LocalServer />
    <Wallet />
{/if}
