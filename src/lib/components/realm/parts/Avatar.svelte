<script lang="ts">
    import { afterUpdate, beforeUpdate, onMount } from "svelte";
    import {
        fetchHexData,
        hexToBase64,
        parseAtomicalIdfromURN,
    } from "$lib/protocols/atomicals/vanilla";

    export let image;

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

    afterUpdate(async () => {
        if (image) {
            const id = parseAtomicalIdfromURN(image);
            if (id?.id) {
                const imageData = await fetchHexData(id.id);
                if (imageData) {
                    imageSrc = hexToBase64(imageData.data, imageData.ext);
                    console.log(imageData.ext);
                }
            } else {
                imageSrc = image;
            }
        }
    });
</script>

<div class="flex justify-center px-5 -mt-12 bg-white">
    <img
        class="h-32 w-32 bg-white p-2 rounded-full {isPixelImage
            ? 'pixel-image'
            : 'high-res-image'}"
        src={imageSrc ? imageSrc : fallbackImage}
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
