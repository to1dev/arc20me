<hr class="mt-6" />
<div class="flex bg-gray-50 playwrite-fr-moderne">
    <div
        class="flex justify-center items-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer duration-100 has-tooltip"
    >
        <!--span
            class="tooltip bg-info text-neutral rounded shadow-lg p-2 -mt-8 bg-opacity-75"
            >Some Nice Tooltip Text</span
        -->
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
            class="icon icon-tabler icons-tabler-outline icon-tabler-currency-bitcoin"
            ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
                d="M6 6h8a3 3 0 0 1 0 6a3 3 0 0 1 0 6h-8"
            /><path d="M8 6l0 12" /><path d="M8 12l6 0" /><path
                d="M9 3l0 3"
            /><path d="M13 3l0 3" /><path d="M9 18l0 3" /><path
                d="M13 18l0 3"
            /></svg
        >
        <span class="font-medium">Donate</span>
    </div>
    <div class="border"></div>
    <div
        class="flex justify-center items-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer duration-100"
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
            class="mr-1 icon icon-tabler icons-tabler-outline icon-tabler-list"
            ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
                d="M9 6l11 0"
            /><path d="M9 12l11 0" /><path d="M9 18l11 0" /><path
                d="M5 6l0 .01"
            /><path d="M5 12l0 .01" /><path d="M5 18l0 .01" /></svg
        >
        <span class="font-medium">Subrealms</span>
    </div>
</div>

<style lang="postcss">
    .tooltip {
        @apply invisible absolute;
    }

    .has-tooltip:hover .tooltip {
        @apply visible z-50;
    }
</style>
