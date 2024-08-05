<script lang="ts">
    import { getBlock } from "./Registry";
    import { sanitizeContent } from "$lib/utils/sanitize";

    export let block: any;

    let open: boolean = false;
</script>

<div class="my-8">
    {#if block?.children}
        {#each block.children as childBlock}
            <div
                class="collapse collapse-plus transition-none border-2 rounded-2xl my-4 px-4 shadow-s hover:border-purple-500 border-purple-100"
            >
                <input type="checkbox" />
                <div class="collapse-title font-bold overflow-hidden">
                    {childBlock.name || null}
                </div>
                <div class="collapse-content">
                    <svelte:component
                        this={getBlock(childBlock?.type)}
                        block={childBlock}
                    />
                </div>
            </div>
        {/each}
    {/if}
</div>

<style>
    .shadow-s {
        --tw-shadow: 0 0.25rem 0.5rem 0 rgba(74, 45, 197, 0.1);
        --tw-shadow-colored: 0 0.25rem 0.5rem 0 var(--tw-shadow-color);
        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
            var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    }
</style>
