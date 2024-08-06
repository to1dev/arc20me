<script lang="ts">
    export let url: any;
    export let text;

    $: href = encodeURI(
        `https://x.com/intent/tweet/?text=${text}&hashtags=Bitcoin,Atomicals,Realm,ARC20ME&via=to1dev&related=""other,users""&url=${url}`
    );

    function redirectToUrl(): void {
        console.log(href);
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
            class="mr-2 flex-shrink-0 icon icon-tabler icons-tabler-outline icon-tabler-brand-x"
            ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
                d="M4 4l11.733 16h4.267l-11.733 -16z"
            /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg
        >Share on X
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
