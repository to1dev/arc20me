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
        document.body.classList.remove("modal-popup", "keep-gutter");
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
    class="z-10 shadow-2xl rounded-md ring-4 ring-white focus:outline-none backdrop:bg-black/25 backdrop:backdrop-blur-sm"
    bind:this={dialog}
    on:close={() => {
        showModal = false;
        document.body.classList.remove("modal-popup", "keep-gutter");
    }}
    on:keydown={handleKeyDown}
>
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="bg-base-100">
        <slot />
        <div class="p-5 flex justify-end">
            <button
                type="button"
                class="bg-base-300 btn btn-ghost no-animation"
                on:click={() => {
                    dialog.close();
                    document.body.classList.remove(
                        "modal-popup",
                        "keep-gutter"
                    );
                }}
                >Close
            </button>
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

    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    @keyframes fadeOut {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }

    dialog::backdrop {
        animation: fadeIn 200ms ease-in forwards;
    }

    button {
        aspect-ratio: 1;
        border-radius: 50%;
        transform: translate(-2px, -2px);
        filter: drop-shadow(2px 2px 3px rgba(0, 0, 0, 0.2));
        transition: all 0.1s;
    }
</style>
