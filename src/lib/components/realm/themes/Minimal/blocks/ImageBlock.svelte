<script lang="ts">
    import { sanitizeContent } from "$lib/utils/sanitize";

    export let block: any;
</script>

<div class="mb-4">
    {#if block?.image}
        <img
            class="ring-1 ring-purple-100 p-1 shadow-md"
            src={block.image}
            alt=""
        />
    {/if}

    {#if block?.desc}
        <div class="m-2 block-text truncate text-center text-2xl">
            {@html sanitizeContent(block.desc)}
        </div>
    {/if}
</div>
