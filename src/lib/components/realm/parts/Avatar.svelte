<script lang="ts">
    import { onMount } from "svelte";

    export let image;

    onMount(async () => {});

    let fallbackImage = "/images/loading/animals/24.gif";
    function handleImageError(event: Event) {
        const target = event.target as HTMLImageElement;
        target.src = fallbackImage;
    }
</script>

<div class="flex justify-center px-5 -mt-12 bg-white">
    <img
        class="h-32 w-32 bg-white p-2 rounded-full"
        src={image ? image : fallbackImage}
        alt=""
        on:error={handleImageError}
    />
</div>
