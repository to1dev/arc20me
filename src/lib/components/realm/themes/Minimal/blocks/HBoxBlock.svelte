<script lang="ts">
    import { getBlock } from "./Registry";

    export let block: any;
    export let columns: number = 2;

    const getColumnClass = (columns: number) => {
        return `w-full md:w-1/${columns} px-2`;
    };
</script>

{#if block?.title}
    <div class="my-16 text-5xl text-center">
        <h2 class="font-bold mb-2">{block.title}</h2>
    </div>
{/if}

<div class="flex flex-wrap">
    {#if block?.children}
        {#each block.children as childBlock}
            <div class="w-full md:w-1/2 px-2">
                <div>
                    <svelte:component
                        this={getBlock(childBlock?.type)}
                        block={childBlock}
                    />
                </div>
            </div>
        {/each}
    {/if}
</div>
