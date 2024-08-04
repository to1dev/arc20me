<script lang="ts">
    import { getBlock } from "./Registry";

    export let block: any;
</script>

<div class="my-4">
    <div class="">
        {#each block.children as childBlock}
            <svelte:component
                this={getBlock(childBlock.type)}
                block={childBlock}
            />
        {/each}
    </div>
</div>
