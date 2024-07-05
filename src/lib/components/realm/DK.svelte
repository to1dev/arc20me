<script lang="ts">
    import { onMount } from "svelte";
    import Avatar from "./parts/Avatar.svelte";
    import RotatingPizza from "./parts/RotatingPizza.svelte";
    import Title from "./parts/Title.svelte";
    import Content from "./parts/Content.svelte";
    import Links from "./parts/Links.svelte";
    import Shortcuts from "./parts/Shortcuts.svelte";
    import Debug from "./parts/Debug.svelte";
    import Love from "./parts/Love.svelte";
    import Menu from "./parts/Menu.svelte";

    export let realm;
    export let debug;
    export let isLoading;
    export let realmData;
    export let meta;
    export let profile;
</script>

<svelte:head>
    <title>{realm} | A Humble Explorer for Atomicals Realm</title>
</svelte:head>

<div class="flex items-center justify-center min-h-screen">
    <div
        class="container m-4 lg:w-2/6 xl:w-2/7 sm:w-full md:w-2/3 shadow-2xl transform border-2 border-white rounded-t-xl"
    >
        <div class="h-48 overflow-hidden rounded-t-xl">
            <img
                class="w-full"
                src={profile?.b ? profile.b : "/images/banner.jpg"}
                alt=""
            />
        </div>
        <div class="flex justify-center px-5 -mt-12 bg-white">
            <Avatar image={profile?.i} />
        </div>
        <Menu />

        <div class="bg-white">
            <div class="text-center px-14 break-words">
                {#if isLoading}
                    <RotatingPizza />
                {:else}
                    <Title name={profile?.n} realm={realmData?.realm} />
                {/if}
                <Content text={profile?.d} />
            </div>
            <Links links={profile?.l} />
            <Shortcuts />
        </div>

        <Love />
        {#if debug}
            <Debug {meta} />
        {/if}
    </div>
</div>

<style lang="postcss">
</style>
