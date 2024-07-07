<script lang="ts">
    import { isDk, debug } from "$lib/stores/Realm";

    export let links;
</script>

{#if $isDk}
    <div class="flex justify-center space-x-4 p-4">
        {#if links?.w}
            {#if typeof links.w[0] === "string"}
                <a
                    href="https://{links.w[0]}"
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
        {#if links?.x}
            <a
                href="https://x.com/{links.x}"
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
                    ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
                        d="M4 4l11.733 16h4.267l-11.733 -16z"
                    /><path
                        d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"
                    /></svg
                ></a
            >
        {/if}
        {#if links?.g}
            <a
                href="https://github.com/{links.g}"
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
                    ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
                        d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"
                    /></svg
                ></a
            >
        {/if}
        {#if links?.t}
            <a
                href="https://t.me/{links.t}"
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
                    ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
                        d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4"
                    /></svg
                ></a
            >
        {/if}
        {#if links?.d}
            <a
                href="https://discord.gg/{links.d}"
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
                    ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
                        d="M8 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"
                    /><path d="M14 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" /><path
                        d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-.972 1.923a11.913 11.913 0 0 0 -4.053 0l-.975 -1.923c-1.5 .16 -3.043 .485 -4.5 1.5c-2 5.667 -2.167 9.833 -1.5 11.5c.667 1.333 2 3 3.5 3c.5 0 2 -2 2 -3"
                    /><path d="M7 16.5c3.5 1 6.5 1 10 0" /></svg
                ></a
            >
        {/if}
        {#if links?.n}
            <a
                href="nostr:{links.n}"
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
                    ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
                        d="M18.9 7a8 8 0 0 1 1.1 5v1a6 6 0 0 0 .8 3"
                    /><path d="M8 11a4 4 0 0 1 8 0v1a10 10 0 0 0 2 6" /><path
                        d="M12 11v2a14 14 0 0 0 2.5 8"
                    /><path d="M8 15a18 18 0 0 0 1.8 6" /><path
                        d="M4.9 19a22 22 0 0 1 -.9 -7v-1a8 8 0 0 1 12 -6.95"
                    /></svg
                ></a
            >
        {/if}
    </div>
{:else if links}
    <div class="flex space-x-4 p-4 break-all">
        {#if $debug}
            <span>Links</span>
            <pre><code>{JSON.stringify(links, null, 4)}</code></pre>
        {/if}
    </div>
{/if}
