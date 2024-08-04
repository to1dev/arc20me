<script lang="ts">
    import { getBlock } from "./Registry";
    import { sanitizeContent } from "$lib/utils/sanitize";

    export let block: any;
</script>

<div class="mb-4">
    {#if block?.title}
        <h2 class="font-bold mb-2">{block.title}</h2>
    {/if}

    {#if block?.content}
        {@html sanitizeContent(block.content)}
    {/if}

    {#if block?.children}
        {#each block.children as childBlock}
            <svelte:component
                this={getBlock(childBlock?.type)}
                block={childBlock}
            />
        {/each}
    {/if}
</div>
