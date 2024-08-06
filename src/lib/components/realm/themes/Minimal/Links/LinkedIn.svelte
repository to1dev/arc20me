<script lang="ts">
    export let url;

    $: href = encodeURI(
        `https://www.linkedin.com/sharing/share-offsite/?url=${url}`
    );

    function redirectToUrl(): void {
        window.open(href, "_blank");
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="flex justify-between w-full" on:click={redirectToUrl}>
    <span
        class="whitespace-nowrap overflow-hidden max-w-64 md:max-w-80 text-ellipsis inline-flex items-center"
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
            class="mr-2 flex-shrink-0 icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin"
            ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
                d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"
            /><path d="M8 11l0 5" /><path d="M8 8l0 .01" /><path
                d="M12 16l0 -5"
            /><path d="M16 16v-3a2 2 0 0 0 -4 0" /></svg
        >LinkedIn
    </span>
    <span class="whitespace-nowrap text-right"
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
            class=" icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"
            ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
                d="M9 6l6 6l-6 6"
            /></svg
        ></span
    >
</div>
