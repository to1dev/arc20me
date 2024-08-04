<script lang="ts">
    import { toUnicode } from "punycode";

    import Title from "./parts/Title.svelte";
    import Avatar from "./parts/Avatar.svelte";
    import Share from "./parts/Share.svelte";
    import Content from "./parts/Content.svelte";
    import Bingo from "./parts/Bingo.svelte";
    import NoProfile from "./parts/NoProfile.svelte";
    import Top from "./parts/Top.svelte";
    import Debug from "./parts/Debug.svelte";
    import LocalServer from "./server/LocalServer.svelte";
    import Database from "./db/Database.svelte";
    import Wallet from "./wallet/Wallet.svelte";

    export let realm: string | null = null;
    export let debug: boolean = false;
    export let realmData: any | null = null;
    export let meta: any | null = null;
    export let profile: any | null = null;

    let uname: string | null = null;
    if (realm) {
        uname = toUnicode(realm);
    }
</script>

<svelte:head>
    <link rel="stylesheet" href="https://use.typekit.net/fcb2rob.css" />
    <title
        >{uname ? uname : ""} | Your Personal Gateway on the Bitcoin Blockchain</title
    >
</svelte:head>

<div
    data-theme="retro"
    class="min-h-screen p-5 -minial bg-white text-4xl leading-relaxed"
>
    <div class="relative max-w-4xl mx-auto p-5 break-words">
        <Avatar image={meta?.image} />
        <Share />
        <div class="mb-4">
            <Title name={profile?.name} realm={realmData?.realm} {uname} />
        </div>
        <div class="mb-4">
            <Content text={profile?.desc} />
            <Bingo {meta} />
            <NoProfile {meta} />
        </div>

        {#if debug}
            <Debug {meta} />
            <LocalServer />
            <Database />
        {/if}
    </div>
    <Top />
</div>

<style>
    .-minial {
        font-family: stern-pro, "LXGW WenKai TC", system-ui, sans-serif;
        font-weight: 400;
    }
</style>
