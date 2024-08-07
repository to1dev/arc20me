<script lang="ts">
    import { getBlock } from "../blocks/Registry";
    import { sanitizeContent } from "$lib/utils/sanitize";

    export let profile;

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
    if (profile?.metadata?.timestamp) {
        const timestamp = profile.metadata.timestamp;
        const _date = new Date(timestamp * 1000);
        date = _date.toDateString();
    }
</script>

<div class="mt-2 text-black">
    {#if profile?.desc}
        <div class="mb-4">
            {@html sanitizeContent(profile?.desc)}
        </div>
    {/if}

    {#if profile?.blocks}
        {#each profile?.blocks as block}
            <svelte:component this={getBlock(block.type)} {block} />
        {/each}
    {/if}

    {#if date}
        <div class="my-4 py-4 italic border-t">
            Last updated: {date}
        </div>
    {/if}
</div>

<style lang="postcss">
</style>
