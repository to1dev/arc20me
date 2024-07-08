<script lang="ts">
    import { onMount } from "svelte";

    onMount(async () => {});

    export let meta;

    $: highlightedJson = JSON.stringify(meta, null, 4);
</script>

<div class="flex flex-col p-4 bg-white border-t bottom-0">
    {#if meta}
        <div class="mt-2 font-light leading-relaxed break-all">
            <pre><code class="json">{highlightedJson}</code></pre>
        </div>
    {/if}
</div>
