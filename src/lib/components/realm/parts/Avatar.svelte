<script lang="ts">
    import { onMount } from "svelte";

    export let image;

    onMount(async () => {});

    let fallbackImage = "/images/loading/animals/24.gif";
    function handleImageError(event: Event) {
        const target = event.target as HTMLImageElement;
        target.src = fallbackImage;
    }

    let isPixelImage: boolean = false;

    const handleImageLoad = (event: Event) => {
        const img = event.target as HTMLImageElement;
        isPixelImage = img.naturalWidth <= 64 && img.naturalHeight <= 64;
    };
</script>

<div class="flex justify-center px-5 -mt-12 bg-white">
    <img
        class="h-32 w-32 bg-white p-2 rounded-full {isPixelImage
            ? 'pixel-image'
            : 'high-res-image'}"
        src={image ? image : fallbackImage}
        alt=""
        on:error={handleImageError}
        on:load={handleImageLoad}
    />
</div>

<style>
    .pixel-image {
        image-rendering: pixelated;
    }
    .high-res-image {
        image-rendering: auto;
    }
</style>
