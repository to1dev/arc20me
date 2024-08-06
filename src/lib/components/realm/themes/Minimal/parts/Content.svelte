<script lang="ts">
    import { getBlock } from "../blocks/Registry";
    import { sanitizeContent } from "$lib/utils/sanitize";
    import data from "$lib/fixtures/blocks.json";

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

    let date = null;
    if (data?.metadata?.timestamp) {
        const timestamp = data.metadata.timestamp;
        const _date = new Date(timestamp * 1000);
        date = _date.toDateString();
    }
</script>

<div class="mt-2 text-black">
    {#if text}
        <div class="mb-4">
            {@html sanitizeContent(text)}
        </div>
    {/if}

    {#each data.blocks as block}
        <svelte:component this={getBlock(block.type)} {block} />
    {/each}

    {#if date}
        <div class="my-4 py-4 italic border-t">
            Last updated: {date}
        </div>
    {/if}
</div>

<style lang="postcss">
</style>
