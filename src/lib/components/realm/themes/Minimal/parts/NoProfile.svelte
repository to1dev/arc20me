<script lang="ts">
    export let meta;
</script>

{#if meta && meta.id && !meta.pid}
    <div class="m-4 flex justify-center items-center duration-100 text-info">
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
            class="mr-1 icon icon-tabler icons-tabler-outline icon-tabler-x"
            ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
                d="M18 6l-12 12"
            /><path d="M6 6l12 12" /></svg
        >No profile!
    </div>
    <div class="m-4 flex justify-center items-center">
        <button
            class="duration-150 py-2 px-3 inline-flex justify-center items-center w-52 gap-x-2 rounded-full bg-blue-500 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="w-6 h-6 icon icon-tabler icons-tabler-outline icon-tabler-shovel"
                ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
                    d="M17 4l3 3"
                /><path d="M18.5 5.5l-8 8" /><path
                    d="M8.276 11.284l4.44 4.44a.968 .968 0 0 1 0 1.369l-2.704 2.704a4.108 4.108 0 0 1 -5.809 -5.81l2.704 -2.703a.968 .968 0 0 1 1.37 0z"
                /></svg
            >Engrave
        </button>
    </div>
{/if}
