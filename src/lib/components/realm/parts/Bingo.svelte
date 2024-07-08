<script lang="ts">
    export let meta;
</script>

{#if meta && !meta.id}
    <div class="m-4 flex justify-center items-center duration-100 text-success">
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
    </div>
    <div>
        <button
            class="duration-150 py-2 px-3 inline-flex justify-center items-center w-24 text-sm font-semibold rounded-full bg-success text-white hover:bg-green-600 disabled:opacity-50 disabled:pointer-events-none"
        >
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
                class="icon icon-tabler icons-tabler-outline icon-tabler-shovel"
                ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
                    d="M17 4l3 3"
                /><path d="M18.5 5.5l-8 8" /><path
                    d="M8.276 11.284l4.44 4.44a.968 .968 0 0 1 0 1.369l-2.704 2.704a4.108 4.108 0 0 1 -5.809 -5.81l2.704 -2.703a.968 .968 0 0 1 1.37 0z"
                /></svg
            >Mint
        </button>
    </div>
{/if}
