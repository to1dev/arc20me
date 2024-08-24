<script lang="ts">
    import Database from "$lib/components/realm/themes/Base/db/Database.svelte";
    import LocalServer from "$lib/components/realm/themes/Base/server/LocalServer.svelte";

    import { toUnicode } from "punycode";

    import Avatar from "./parts/Avatar.svelte";
    import Banner from "./parts/Banner.svelte";
    import Title from "./parts/Title.svelte";
    import Content from "./parts/Content.svelte";
    import Bingo from "./parts/Bingo.svelte";
    import NoProfile from "./parts/NoProfile.svelte";
    import Links from "./parts/Links.svelte";
    import Shortcuts from "./parts/Shortcuts.svelte";
    import Debug from "./parts/Debug.svelte";
    import Love from "./parts/Love.svelte";
    import Menu from "./parts/Menu.svelte";
    import Collections from "./parts/Collections.svelte";
    import Wallets from "./parts/Wallets.svelte";

    export let realm: string | null = null;
    export let debug: boolean = false;
    export let realmData: any | null = null;
    export let meta: any | null = null;
    export let profile: any | null = null;

    let uname: string | null = null;
    if (realm) {
        uname = toUnicode(realm);
    }

    let title: string | null = null;
    if (profile) {
        title = profile?.name;
    }

    let background = meta?.background;
    let vars = `--background-image: url("${background || "/images/background.svg"}")`;
</script>

<svelte:head>
    <title
        >{title || uname || ""} | Your Personal Gateway on the Bitcoin Blockchain</title
    >
</svelte:head>

<div
    data-theme="business"
    class="flex flex-col lg:flex-row flex-auto min-h-screen bg-white bg-fixed bg-cover background"
    style={vars}
>
    <div class="flex-auto">
        <div class="mx-auto w-full">
            <div class="space-y-5">
                <main class="flex-1 text-base-content">
                    <div class="text-lg dynamic">
                        <div class="flex items-center justify-center">
                            <!--div class="container m-4 lg:w-2/6 xl:w-2/7 sm:w-full md:w-2/3 shadow-2xl transform border-2 border-white rounded-t-xl"></div-->
                            <div
                                class="container m-0 sm:m-8 sm:w-full md:w-2/3 2xl:w-2/6 xl:w-2/5 lg:w-3/6 sm:shadow-2xl transform ring-8 ring-white"
                            >
                                <Banner banner={meta?.banner} />
                                <Avatar image={meta?.image} />
                                <Menu />

                                <div class="bg-white pt-3">
                                    <div class="text-center px-14 break-words">
                                        <Title
                                            name={profile?.name}
                                            realm={realmData?.realm}
                                            {uname}
                                        />
                                        <Content text={profile?.desc} />
                                        <Bingo {meta} />
                                        <NoProfile {meta} />
                                    </div>
                                    <Links links={profile?.links} />
                                    <Collections
                                        collections={profile?.collections}
                                    />
                                    {#if debug}
                                        <Wallets wallets={profile?.wallets} />
                                    {/if}
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
                    </div>
                </main>
            </div>
        </div>
    </div>
</div>

<style lang="postcss">
    .background {
        background-image: var(--background-image);
    }

    @media (max-width: 640px) {
        .background {
            background-image: none;
        }
    }
</style>
