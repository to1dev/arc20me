<script lang="ts">
    import { onMount } from "svelte";
    import Database from "$lib/components/realm/Database.svelte";
    import LocalServer from "$lib/components/LocalServer.svelte";

    import punycode from "punycode/";

    import Avatar from "./parts/Avatar.svelte";
    import Banner from "./parts/Banner.svelte";
    import Title from "./parts/Title.svelte";
    import Content from "./parts/Content.svelte";
    import Links from "./parts/Links.svelte";
    import Shortcuts from "./parts/Shortcuts.svelte";
    import Debug from "./parts/Debug.svelte";
    import Love from "./parts/Love.svelte";
    import Menu from "./parts/Menu.svelte";

    export let realm;
    export let debug;
    export let realmData;
    export let meta;
    export let profile;

    let uname: string | null = null;
    onMount(async () => {
        uname = punycode.toUnicode(realm);
    });
</script>

<svelte:head>
    <title>{uname} | A Humble Explorer for Atomicals Realm</title>
</svelte:head>

<div class="flex items-center justify-center">
    <!--div class="container m-4 lg:w-2/6 xl:w-2/7 sm:w-full md:w-2/3 shadow-2xl transform border-2 border-white rounded-t-xl"></div-->
    <div
        class="container m-0 sm:m-8 sm:w-full md:w-2/3 2xl:w-2/6 xl:w-2/5 lg:w-3/6 sm:shadow-2xl transform ring-8 ring-white"
    >
        <Banner banner={profile?.b} />
        <Avatar image={profile?.i} />
        <Menu />

        <div class="bg-white">
            <div class="text-center px-14 break-words">
                <Title name={profile?.n} realm={realmData?.realm} {uname} />
                <Content text={profile?.d} />
            </div>
            <Links links={profile?.l} />
            <Shortcuts />
        </div>

        <Love />
        {#if debug}
            <Debug {meta} />
            <LocalServer />
            <Database />
        {/if}
    </div>
</div>

<style lang="postcss">
</style>
