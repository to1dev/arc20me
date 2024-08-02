<script lang="ts">
    import { onMount } from "svelte";

    export let image;

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

    onMount(() => {
        if (img && img.complete) {
            handleImageLoad();
        }
    });
</script>

<div class="flex justify-center mb-16">
    <div class="indicator">
        <img
            bind:this={img}
            class="object-cover cursor-pointer h-24 w-24 sm:h-28 sm:w-28 border-4 border-white ring-4
             ring-purple-300 rounded-full hover:ring-purple-500 transition-all duration-200
             shadow-xl hover:shadow-2xl {imgClass}"
            src={image || fallbackImage}
            alt=""
            on:error={handleImageError}
            on:load={handleImageLoad}
        />
        <!--img
            src="/images/check.svg"
            alt="Icon"
            class="absolute top-0 right-0 w-6 h-6 transform translate-x-0 translate-y-0 bg-white rounded-full"
        /-->
    </div>
</div>

<style>
    .pixel-image {
        image-rendering: pixelated;
    }
    .high-res-image {
        image-rendering: auto;
    }
</style>
