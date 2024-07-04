<script lang="ts">
    export let showModal: boolean;

    let dialog: HTMLDialogElement;

    $: if (dialog && showModal) dialog.showModal();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
    class="modal"
    bind:this={dialog}
    on:close={() => (showModal = false)}
    on:click|self={() => dialog.close()}
>
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="bg-base-100 shadow-xl rounded-md">
        <slot />
        <div class="p-5 flex justify-end">
            <button
                type="button"
                class="bg-base-300 btn btn-ghost"
                on:click={() => dialog.close()}>Close</button
            >
        </div>
    </div>
</dialog>
