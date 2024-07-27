<script lang="ts">
    import { afterUpdate, beforeUpdate, onMount } from "svelte";

    export let image;
    export let imageData;

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

    let imageSrc: string | null = null;

    onMount(async () => {
        if (imageData && !image) {
            imageSrc = imageData;
        } else {
            imageSrc = image;
        }
    });
</script>

<div class="flex justify-center px-5 -mt-12 bg-white">
    <img
        class="object-cover h-24 w-24 sm:h-28 sm:w-28 bg-white ring-8 ring-white rounded-full {isPixelImage
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
