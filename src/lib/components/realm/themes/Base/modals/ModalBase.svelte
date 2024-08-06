<script lang="ts">
    export let showModal: boolean;

    let dialog: HTMLDialogElement;

    $: if (dialog && showModal) {
        dialog.showModal();
        if (hasScrollbar()) {
            document.body.classList.add("modal-popup", "keep-gutter");
        } else {
            document.body.classList.add("modal-popup");
        }
    } else if (dialog) {
        dialog.close();
    }

    function hasScrollbar(): boolean {
        const hasVerticalScrollbar =
            document.body.scrollHeight > window.innerHeight;
        return hasVerticalScrollbar;
    }

    function handleKeyDown(event: KeyboardEvent) {
        event.preventDefault();
        event.stopPropagation();
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
    class="z-[999] shadow-2xl rounded-md ring-8 ring-black ring-opacity-35 focus:outline-none bg-white"
    bind:this={dialog}
    on:close={() => {
        showModal = false;
        document.body.classList.remove("modal-popup", "keep-gutter");
    }}
    on:click|self={() => {
        dialog.close();
    }}
    on:keydown={handleKeyDown}
>
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="p-5">
        <div class="flex">
            <button
                class="absolute top-0 right-0 p-1 m-2 bg-white hover:hover:bg-gray-200 rounded-full transition-all duration-150"
                on:click={() => {
                    dialog.close();
                }}
                ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="stroke-1 stroke-black icon icon-tabler icons-tabler-outline icon-tabler-x"
                    ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
                        d="M18 6l-12 12"
                    /><path d="M6 6l12 12" /></svg
                ></button
            >
        </div>
        <div class="flex flex-col space-y-4 mt-9">
            <slot />
        </div>
    </div>
</dialog>

<!-- svelte-ignore css-unused-selector -->
<style>
    :root:has(:is(.modal-popup)) {
        overflow: hidden;
    }

    :root:has(:is(.keep-gutter)) {
        scrollbar-gutter: stable;
    }

    dialog::backdrop {
        animation: fade 0.2s ease-out;
    }

    @keyframes fade {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
</style>
