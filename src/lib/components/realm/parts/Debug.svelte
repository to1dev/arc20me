<script lang="ts">
    export let meta;

    $: highlightedJson = JSON.stringify(meta, null, 4);
</script>

{#if meta}
    <div
        class="flex flex-col text-info leading-relaxed p-4 bg-white border-t bottom-0"
    >
        <div class="mt-2 font-light leading-relaxed break-all">
            <pre><code class="json">{highlightedJson}</code></pre>
        </div>
    </div>
{/if}
