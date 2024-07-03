<script lang="ts">
    import { page } from "$app/stores";
    import { get } from "svelte/store";

    $: realm = get(page).params.realm;

    let debug = import.meta.env.MODE === "development";

    import Realm from "$lib/components/Realm.svelte";
    import Wallet from "$lib/components/Wallet.svelte";
</script>

<Realm {realm} {debug} />
{#if debug}
    <Wallet />
{/if}
