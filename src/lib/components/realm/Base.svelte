<script lang="ts">
    import { onMount } from "svelte";
    import DOMPurify from "dompurify";
    import Avatar from "./parts/Avatar.svelte";
    import RotatingPizza from "./parts/RotatingPizza.svelte";
    import Title from "./parts/Title.svelte";
    import Content from "./parts/Content.svelte";
    import Links from "./parts/Links.svelte";
    import Shortcuts from "./parts/Shortcuts.svelte";

    export let realm;
    export let debug;
    export let isLoading;
    export let realmData;
    export let profile;

    function closeMenu(): void {
        const elem = document.activeElement as HTMLElement;
        if (elem) {
            elem.blur();
        }
    }

    let error: string | null = null;

    onMount(async () => {
        try {
            error = null;
        } catch (e) {
            error = (e as Error).message;
        } finally {
        }
    });
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
        <div class="dropdown dropdown-end absolute top-2 right-2 p-1">
            <div
                tabindex="-1"
                role="button"
                class="btn btn-ghost btn-circle btn-sm bg-neutral-700 hover:bg-neutral p-1"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="icon icon-tabler icons-tabler-outline icon-tabler-dots"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                    <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                    <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                </svg>
            </div>
            <ul
                tabindex="-1"
                class="menu dropdown-content bg-neutral rounded-box z-[1] w-52 p-2 shadow-xl"
            >
                <li>
                    <a href="/"
                        ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="w-4 h-4 icon icon-tabler icons-tabler-outline icon-tabler-home"
                            ><path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                            /><path d="M5 12l-2 0l9 -9l9 9l-2 0" /><path
                                d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"
                            /><path
                                d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"
                            /></svg
                        >Home</a
                    >
                </li>
                <li>
                    <button on:click={closeMenu}
                        ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="w-4 h-4 icon icon-tabler icons-tabler-outline icon-tabler-wallet"
                            ><path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                            /><path
                                d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12"
                            /><path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" /></svg
                        >Wallet</button
                    >
                </li>
                <li>
                    <button on:click={closeMenu}
                        ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="w-4 h-4 icon icon-tabler icons-tabler-outline icon-tabler-paint"
                            ><path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                            /><path
                                d="M5 3m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z"
                            /><path
                                d="M19 6h1a2 2 0 0 1 2 2a5 5 0 0 1 -5 5l-5 0v2"
                            /><path
                                d="M10 15m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"
                            /></svg
                        >Mint</button
                    >
                </li>
                <li>
                    <button on:click={closeMenu}
                        ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="w-4 h-4 icon icon-tabler icons-tabler-outline icon-tabler-share"
                            ><path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                            /><path
                                d="M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"
                            /><path
                                d="M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"
                            /><path
                                d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"
                            /><path d="M8.7 10.7l6.6 -3.4" /><path
                                d="M8.7 13.3l6.6 3.4"
                            /></svg
                        >Share</button
                    >
                </li>
            </ul>
        </div>

        <div class="bg-white">
            <div class="text-center px-14 break-words">
                {#if isLoading}
                    <RotatingPizza />
                {:else}
                    <Title name={profile?.name} realm={realmData?.realm} />
                {/if}
                <Content text={profile?.d} />
            </div>
            <Links links={profile?.l} />
            <Shortcuts />
        </div>

        <div class="flex justify-center items-center p-4 bg-white border-t">
            Bring to you with <span class="text-red-500 mx-1 emoji">❤️</span>
            by
            <a href="https://x.com/to1dev" target="_blank" class="ml-1"
                >@to1dev</a
            >
            <a
                href="https://github.com/to1dev/arc20me"
                target="_blank"
                class="ml-2"
                ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 496 512"
                    class="w-5 h-5 hover:fill-neutral fill-gray-400 duration-100"
                    ><path
                        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                    /></svg
                ></a
            >
        </div>
        {#if debug}
            <div
                class="flex flex-col justify-center items-center p-4 bg-white border-t"
            >
                {#if realmData}
                    <div class="mt-2 font-light leading-relaxed break-all">
                        {JSON.stringify(realmData, null, 4)}
                    </div>
                {/if}
            </div>
        {/if}
    </div>
</div>

<style lang="postcss">
</style>
