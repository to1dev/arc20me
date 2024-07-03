<script lang="ts">
    import { fetchResult } from "$lib/api";
    import { onMount } from "svelte";
    import DOMPurify from "dompurify";
    import type { Content, Realm } from "$lib/types/Result";

    export let realm;
    export let debug;

    function closeMenu(): void {
        const elem = document.activeElement as HTMLElement;
        if (elem) {
            elem.blur();
        }
    }

    let random: number;
    let error: string | null = null;
    let isLoading: boolean = false;
    let realmData: Realm;
    let profile: Content;

    onMount(async () => {
        try {
            random = Math.floor(Math.random() * 50) + 1;
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
</script>

<div class="flex items-center justify-center min-h-screen">
    <div
        class="container m-4 lg:w-2/6 xl:w-2/7 sm:w-full md:w-2/3 shadow-2xl transform duration-100 easy-in-out border-2 border-white rounded-t-xl"
    >
        <div class="h-48 overflow-hidden rounded-t-xl">
            {#if profile}
                <img class="w-full" src={profile.b} alt="" />
            {:else}
                <img class="w-full" src="/images/banner.jpg" alt="" />
            {/if}
        </div>
        <div class="flex justify-center px-5 -mt-12 bg-white">
            {#if profile}
                <img
                    class="h-32 w-32 bg-white p-2 rounded-full"
                    src={profile.i}
                    alt=""
                />
            {:else}
                <img
                    class="h-32 w-32 bg-white p-2 rounded-full"
                    src={isLoading
                        ? "/images/loading/sloth.gif"
                        : "/images/loading/s/sloth.svg"}
                    alt=""
                />
            {/if}
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
                    <h2
                        class="text-gray-800 text-3xl font-bold mb-2 animate-spin"
                    >
                        <span>➕</span>
                    </h2>
                {:else}
                    <h2 class="text-gray-800 text-3xl font-bold mb-2">
                        <span
                            >➕{#if profile}{profile.n}{:else}{realm}{/if}</span
                        >
                    </h2>
                {/if}
                {#if profile}
                    <a
                        class="text-gray-400 mt-2 hover:text-blue-500"
                        href="https://x.com/{profile.l.x}"
                        target="_blank">@{profile.l.x}</a
                    >
                {/if}
                <p class="mt-2 text-gray-500 font-light leading-relaxed">
                    {#if profile}
                        {DOMPurify.sanitize(profile.d.enUS)}
                        {DOMPurify.sanitize(profile.d.zhCN)}
                    {/if}
                </p>
            </div>
            {#if profile}
                <div class="flex justify-center space-x-4 p-4">
                    {#if profile.l.w}
                        {#if typeof profile.l.w[0] === "string"}
                            <a
                                href="https://{profile.l.w[0]}"
                                class="hover:text-neutral-400 duration-100"
                                target="_blank"
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
                                    class="icon icon-tabler icons-tabler-outline icon-tabler-home"
                                    ><path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                    /><path d="M5 12l-2 0l9 -9l9 9l-2 0" /><path
                                        d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"
                                    /><path
                                        d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"
                                    /></svg
                                ></a
                            >
                        {/if}
                    {/if}
                    {#if profile.l.x}
                        <a
                            href="https://x.com/{profile.l.x}"
                            class="hover:text-neutral-400"
                            target="_blank"
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
                                class="icon icon-tabler icons-tabler-outline icon-tabler-brand-x"
                                ><path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                /><path
                                    d="M4 4l11.733 16h4.267l-11.733 -16z"
                                /><path
                                    d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"
                                /></svg
                            ></a
                        >
                    {/if}
                    {#if profile.l.g}
                        <a
                            href="https://github.com/{profile.l.g}"
                            class="hover:text-neutral-400 duration-100"
                            target="_blank"
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
                                class="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"
                                ><path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                /><path
                                    d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"
                                /></svg
                            ></a
                        >
                    {/if}
                    {#if profile.l.t}
                        <a
                            href="https://t.me/{profile.l.t}"
                            class="hover:text-neutral-400 duration-100"
                            target="_blank"
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
                                class="icon icon-tabler icons-tabler-outline icon-tabler-brand-telegram"
                                ><path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                /><path
                                    d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4"
                                /></svg
                            ></a
                        >
                    {/if}
                    {#if profile.l.d}
                        <a
                            href="https://discord.gg/{profile.l.d}"
                            class="hover:text-neutral-400 duration-100"
                            target="_blank"
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
                                class="icon icon-tabler icons-tabler-outline icon-tabler-brand-discord"
                                ><path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                /><path
                                    d="M8 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"
                                /><path
                                    d="M14 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"
                                /><path
                                    d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-.972 1.923a11.913 11.913 0 0 0 -4.053 0l-.975 -1.923c-1.5 .16 -3.043 .485 -4.5 1.5c-2 5.667 -2.167 9.833 -1.5 11.5c.667 1.333 2 3 3.5 3c.5 0 2 -2 2 -3"
                                /><path d="M7 16.5c3.5 1 6.5 1 10 0" /></svg
                            ></a
                        >
                    {/if}
                    {#if profile.p.n}
                        <a
                            href="npub:{profile.p.n}"
                            class="hover:text-neutral-400 duration-100"
                            target="_blank"
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
                                class="icon icon-tabler icons-tabler-outline icon-tabler-fingerprint"
                                ><path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                /><path
                                    d="M18.9 7a8 8 0 0 1 1.1 5v1a6 6 0 0 0 .8 3"
                                /><path
                                    d="M8 11a4 4 0 0 1 8 0v1a10 10 0 0 0 2 6"
                                /><path d="M12 11v2a14 14 0 0 0 2.5 8" /><path
                                    d="M8 15a18 18 0 0 0 1.8 6"
                                /><path
                                    d="M4.9 19a22 22 0 0 1 -.9 -7v-1a8 8 0 0 1 12 -6.95"
                                /></svg
                            ></a
                        >
                    {/if}
                </div>
            {/if}

            <hr class="mt-6" />
            <div class="flex bg-gray-50">
                <div
                    class="flex justify-center items-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer duration-100"
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
                        class="icon icon-tabler icons-tabler-outline icon-tabler-currency-bitcoin"
                        ><path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                        /><path
                            d="M6 6h8a3 3 0 0 1 0 6a3 3 0 0 1 0 6h-8"
                        /><path d="M8 6l0 12" /><path d="M8 12l6 0" /><path
                            d="M9 3l0 3"
                        /><path d="M13 3l0 3" /><path d="M9 18l0 3" /><path
                            d="M13 18l0 3"
                        /></svg
                    >
                    <span class="font-semibold">Donate</span>
                </div>
                <div class="border"></div>
                <div
                    class="flex justify-center items-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer duration-100"
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
                        class="mr-1 icon icon-tabler icons-tabler-outline icon-tabler-list"
                        ><path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                        /><path d="M9 6l11 0" /><path d="M9 12l11 0" /><path
                            d="M9 18l11 0"
                        /><path d="M5 6l0 .01" /><path d="M5 12l0 .01" /><path
                            d="M5 18l0 .01"
                        /></svg
                    >
                    <span class="font-semibold">Subrealms</span>
                </div>
            </div>
        </div>

        <div
            class="flex justify-center items-center p-4 bg-white border-t text-sm"
        >
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
                    class="w-4 h-4 hover:fill-neutral fill-gray-400 duration-100"
                    ><path
                        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                    /></svg
                ></a
            >
        </div>
        {#if debug && realmData}
            <div class="flex justify-center items-center p-4 bg-white border-t">
                <div
                    class="text-sm mt-2 font-light leading-relaxed break-words"
                >
                    {JSON.stringify(realmData, null, 4)}
                </div>
            </div>
        {/if}
    </div>
</div>

<style lang="postcss">
    .background {
        background-color: #ee5522;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3CradialGradient id='a' gradientUnits='objectBoundingBox'%3E%3Cstop offset='0' stop-color='%23FB3'/%3E%3Cstop offset='1' stop-color='%23ee5522'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='0' y1='750' x2='1550' y2='750'%3E%3Cstop offset='0' stop-color='%23f7882b'/%3E%3Cstop offset='1' stop-color='%23ee5522'/%3E%3C/linearGradient%3E%3Cpath id='s' fill='url(%23b)' d='M1549.2 51.6c-5.4 99.1-20.2 197.6-44.2 293.6c-24.1 96-57.4 189.4-99.3 278.6c-41.9 89.2-92.4 174.1-150.3 253.3c-58 79.2-123.4 152.6-195.1 219c-71.7 66.4-149.6 125.8-232.2 177.2c-82.7 51.4-170.1 94.7-260.7 129.1c-90.6 34.4-184.4 60-279.5 76.3C192.6 1495 96.1 1502 0 1500c96.1-2.1 191.8-13.3 285.4-33.6c93.6-20.2 185-49.5 272.5-87.2c87.6-37.7 171.3-83.8 249.6-137.3c78.4-53.5 151.5-114.5 217.9-181.7c66.5-67.2 126.4-140.7 178.6-218.9c52.3-78.3 96.9-161.4 133-247.9c36.1-86.5 63.8-176.2 82.6-267.6c18.8-91.4 28.6-184.4 29.6-277.4c0.3-27.6 23.2-48.7 50.8-48.4s49.5 21.8 49.2 49.5c0 0.7 0 1.3-0.1 2L1549.2 51.6z'/%3E%3Cg id='g'%3E%3Cuse href='%23s' transform='scale(0.12) rotate(60)'/%3E%3Cuse href='%23s' transform='scale(0.2) rotate(10)'/%3E%3Cuse href='%23s' transform='scale(0.25) rotate(40)'/%3E%3Cuse href='%23s' transform='scale(0.3) rotate(-20)'/%3E%3Cuse href='%23s' transform='scale(0.4) rotate(-30)'/%3E%3Cuse href='%23s' transform='scale(0.5) rotate(20)'/%3E%3Cuse href='%23s' transform='scale(0.6) rotate(60)'/%3E%3Cuse href='%23s' transform='scale(0.7) rotate(10)'/%3E%3Cuse href='%23s' transform='scale(0.835) rotate(-40)'/%3E%3Cuse href='%23s' transform='scale(0.9) rotate(40)'/%3E%3Cuse href='%23s' transform='scale(1.05) rotate(25)'/%3E%3Cuse href='%23s' transform='scale(1.2) rotate(8)'/%3E%3Cuse href='%23s' transform='scale(1.333) rotate(-60)'/%3E%3Cuse href='%23s' transform='scale(1.45) rotate(-30)'/%3E%3Cuse href='%23s' transform='scale(1.6) rotate(10)'/%3E%3C/g%3E%3C/defs%3E%3Cg transform='rotate(0 0 0)'%3E%3Cg transform='rotate(0 0 0)'%3E%3Ccircle fill='url(%23a)' r='3000'/%3E%3Cg opacity='0.5'%3E%3Ccircle fill='url(%23a)' r='2000'/%3E%3Ccircle fill='url(%23a)' r='1800'/%3E%3Ccircle fill='url(%23a)' r='1700'/%3E%3Ccircle fill='url(%23a)' r='1651'/%3E%3Ccircle fill='url(%23a)' r='1450'/%3E%3Ccircle fill='url(%23a)' r='1250'/%3E%3Ccircle fill='url(%23a)' r='1175'/%3E%3Ccircle fill='url(%23a)' r='900'/%3E%3Ccircle fill='url(%23a)' r='750'/%3E%3Ccircle fill='url(%23a)' r='500'/%3E%3Ccircle fill='url(%23a)' r='380'/%3E%3Ccircle fill='url(%23a)' r='250'/%3E%3C/g%3E%3Cg transform='rotate(0 0 0)'%3E%3Cuse href='%23g' transform='rotate(10)'/%3E%3Cuse href='%23g' transform='rotate(120)'/%3E%3Cuse href='%23g' transform='rotate(240)'/%3E%3C/g%3E%3Ccircle fill-opacity='0.1' fill='url(%23a)' r='3000'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        background-attachment: fixed;
        background-size: cover;
    }
</style>
