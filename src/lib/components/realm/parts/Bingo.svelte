<script lang="ts">
    import { onMount } from "svelte";

    export let meta;

    onMount(() => {
        console.log(meta);
    });
</script>

{#if meta && !meta.id}
    <div class="m-4 flex justify-center items-center duration-100 text-success">
        {#if meta?.cid}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="mr-1 icon icon-tabler icons-tabler-outline icon-tabler-checks"
                ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
                    d="M7 12l5 5l10 -10"
                /><path d="M2 12l5 5m5 -5l5 -5" /></svg
            >Pending minting with candidates
        {:else}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="mr-1 icon icon-tabler icons-tabler-outline icon-tabler-check"
                ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
                    d="M5 12l5 5l10 -10"
                /></svg
            >Available for minting!
        {/if}
    </div>
    <div>
        <button
            class="duration-150 py-2 px-3 inline-flex justify-center items-center w-28 gap-x-2 text-base font-semibold rounded-full bg-success text-white hover:bg-green-600 disabled:opacity-50 disabled:pointer-events-none"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="w-5 h-5 icon icon-tabler icons-tabler-outline icon-tabler-shovel"
                ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
                    d="M17 4l3 3"
                /><path d="M18.5 5.5l-8 8" /><path
                    d="M8.276 11.284l4.44 4.44a.968 .968 0 0 1 0 1.369l-2.704 2.704a4.108 4.108 0 0 1 -5.809 -5.81l2.704 -2.703a.968 .968 0 0 1 1.37 0z"
                /></svg
            >{#if meta?.cid}Snatch{:else}Mint{/if}
        </button>
    </div>
{/if}
