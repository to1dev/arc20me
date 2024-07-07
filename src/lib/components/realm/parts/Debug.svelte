<script lang="ts">
    import { onMount } from "svelte";
    import { type ParsedId } from "$lib/protocols/atomicals/vanilla";
    import { parseIds } from "../../../../tests/parse-atomical-id.test";

    async function test1(): Promise<ParsedId[]> {
        return await parseIds();
    }

    let ids: ParsedId[] | null = null;
    onMount(async () => {
        ids = await test1();
    });

    export let meta;

    $: highlightedJson = JSON.stringify(meta, null, 4);
    $: parsedIds = JSON.stringify(ids, null, 4);
</script>

<div
    class="flex flex-col justify-center items-center p-4 bg-white border-t bottom-0"
>
    {#if meta}
        <div class="mt-2 font-light leading-relaxed break-all">
            <pre><code class="json">{highlightedJson}{parsedIds}</code></pre>
        </div>
    {/if}
</div>
