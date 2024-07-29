<script lang="ts">
    import { onMount } from "svelte";

    export let image;
    //export let imageData;

    let fallbackImage = "/images/loading/animals/24.gif";
    function handleImageError(event: Event) {
        const target = event.target as HTMLImageElement;
        target.src = fallbackImage;
    }

    let img: HTMLImageElement | null = null;
    let imgClass: string = "";

    function handleImageLoad() {
        if (img) {
            const width = img.naturalWidth;
            const height = img.naturalHeight;

            if (width <= 64 && height <= 64) {
                imgClass = "pixel-image";
            } else {
                imgClass = "";
            }
        }
    }

    let isPixelImage: boolean = false;

    //let imageSrc: string | null = null;

    /*onMount(async () => {
        if (imageData && !image) {
            imageSrc = imageData;
        } else {
            imageSrc = image;
        }
    });*/

    onMount(async () => {
        if (img && img.complete) {
            handleImageLoad();
        }
    });
</script>

<div class="flex justify-center px-5 -mt-12 bg-white">
    <img
        bind:this={img}
        class="object-cover h-24 w-24 sm:h-28 sm:w-28 bg-white ring-8 ring-white rounded-full {imgClass}"
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
