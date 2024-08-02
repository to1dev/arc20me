<script lang="ts">
    function closeMenu(): void {
        const elem = document.activeElement as HTMLElement;
        if (elem) {
            elem.blur();
        }
    }

    let showModal = false;

    function toggleMenu() {
        showModal = !showModal;
    }
</script>

<div class="dropdown dropdown-end absolute top-2 right-2 p-1">
    <button
        on:click={toggleMenu}
        tabindex="-1"
        class="btn btn-ghost btn-sm w-8 h-8 no-animation text-white p-1 rounded-sm"
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
            class="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"
            ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
                d="M4 6l16 0"
            /><path d="M4 12l16 0" /><path d="M4 18l16 0" /></svg
        >
    </button>
</div>
