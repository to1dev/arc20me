<script lang="ts">
    export let url: any;

    let showSuccessIcon: boolean = false;

    function copyToClipboard(): void {
        if (url && !showSuccessIcon) {
            navigator.clipboard
                .writeText(url)
                .then(() => {
                    showSuccessIcon = true;
                    setTimeout(() => {
                        showSuccessIcon = false;
                    }, 1000);
                })
                .catch((err) => {
                    console.error("Failed to copy: ", err);
                });
        }
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="flex justify-between w-full" on:click={copyToClipboard}>
    <span
        class="whitespace-nowrap overflow-hidden max-w-40 md:max-w-80 text-ellipsis"
        >{url}
    </span>
    <span
        class="whitespace-nowrap text-right transition-all duration-500 ease-in-out"
        >{showSuccessIcon ? "Copied" : "Copy"}</span
    >
</div>
