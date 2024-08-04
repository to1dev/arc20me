<script lang="ts">
    import { sanitizeContent } from "$lib/utils/sanitize";

    export let block: any;
</script>

<div class="mb-4">
    {#if block?.title}
        <h2 class="font-bold mb-2">{block.title}</h2>
    {/if}
    {@html sanitizeContent(block.content)}
</div>
