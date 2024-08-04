<script lang="ts">
    import { getBlock } from "../blocks/Registry";
    import { sanitizeContent } from "$lib/utils/sanitize";
    import blocks from "$lib/fixtures/blocks.json";

    export let text;

    //let clean: string | Promise<string> | null = null;

    /*try {
        if (text) {
            clean = sanitize(text, {
                sanitizeHtml: customConfig,
            });
        }
    } catch (e) {
        console.error((e as Error).message);
        clean = null;
    }*/
</script>

<div class="mt-2 text-black">
    {#if text}
        {@html sanitizeContent(text)}
    {/if}

    {#each blocks.blocks as block}
        <svelte:component this={getBlock(block.type)} {block} />
    {/each}
</div>

<style lang="postcss">
</style>
