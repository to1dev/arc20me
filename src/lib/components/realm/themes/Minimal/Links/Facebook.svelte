<script lang="ts">
    export let url;
    export let quote;

    $: href = encodeURI(
        `https://facebook.com/sharer/sharer.php?u=${url}&quote=${quote}`
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
            class="mr-2 flex-shrink-0 icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook"
            ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
                d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"
            /></svg
        >Facebook
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
