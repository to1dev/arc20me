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

    onMount(() => {
        if (img && img.complete) {
            handleImageLoad();
        }
    });

    let selected: boolean = false;
</script>

<div class="flex justify-center mb-16">
    <div class="indicator">
        <img
            bind:this={img}
            class="object-contain h-24 w-24 rounded-full {imgClass}"
            aria-current={selected}
            src={image || fallbackImage}
            alt=""
            on:error={handleImageError}
            on:load={handleImageLoad}
        />

        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
        <!--img
            bind:this={img}
            class="object-cover cursor-pointer h-24 w-24 sm:h-28 sm:w-28 border-4 border-white ring-4
             ring-purple-300 rounded-full hover:ring-purple-500 transition-all duration-200
             shadow-xl hover:shadow-2xl {imgClass}"
            aria-current={selected}
            src={image || fallbackImage}
            on:click={() => {
                selected = !selected;
            }}
            alt=""
            on:error={handleImageError}
            on:load={handleImageLoad}
        /-->

        <!--img
            src="/images/check.svg"
            alt="Icon"
            class="absolute top-0 right-0 w-6 h-6 transform translate-x-0 translate-y-0 bg-white rounded-full"
        /-->
        <!--span class="absolute flex h-4 w-4 top-1 right-1">
            <span
                class="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"
            ></span>
            <span class="relative inline-flex rounded-full h-4 w-4 bg-teal-500"
            ></span>
        </span-->
    </div>
</div>

<style>
    .pixel-image {
        image-rendering: pixelated;
    }
    .high-res-image {
        image-rendering: auto;
    }
    /*.avatarButton {
        transform: translate(-2px, -2px);
    }

    .avatarButton[aria-current="true"] {
        transform: none;
        filter: none;
    }*/
</style>
