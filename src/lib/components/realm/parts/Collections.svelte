<script lang="ts">
    import { onMount } from "svelte";
    import { afterUpdate } from "svelte";
    import { debug } from "$lib/stores/Realm";
    import {
        extractImages,
        parseAtomicalIdfromURN,
    } from "$lib/protocols/atomicals/vanilla";

    export let collections;

    let imageList: string[] | null = null;
    afterUpdate(async () => {
        if (collections) {
            imageList = extractImages(collections);
        }
    });
</script>

{#if $debug}
    {#if collections}
        <div class="flex justify-center space-x-4 p-4 break-all">
            <span>Collections</span>
            <pre><code>{JSON.stringify(collections, null, 4)}</code></pre>
        </div>
    {/if}

    {#if imageList}
        {#each imageList as image}
            <div
                class="p-4 mb-4 text-sm rounded-lg bg-gray-800 text-blue-400 break-all"
                role="alert"
            >
                {#each Object.entries(parseAtomicalIdfromURN(image)) as [key, value]}
                    {#if key == "id" || key == "prefix"}
                        <div>{value}</div>
                    {/if}
                {/each}
            </div>
        {/each}
    {/if}
{/if}
