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

    onMount(async () => {
        if (img && img.complete) {
            handleImageLoad();
        }
    });

    let selected: boolean = false;
</script>

<div class="flex justify-center my-8">
    <div class="indicator">
        <!--img
            src="/images/decor/decor1.webp"
            alt="Icon"
            class="absolute w-32 h-32"
            style="top: 50%; left: 50%; max-width: none; transform: translate(-50%, -50%); width: calc(130%); height: calc(130%); z-index: 1;"
        /-->

        <!--div class="h-24 w-24 circle-border gradient-border">
            <img
                bind:this={img}
                class="object-cover {imgClass}"
                aria-current={selected}
                src={image || fallbackImage}
                alt=""
                on:error={handleImageError}
                on:load={handleImageLoad}
            />
        </div-->

        <img
            bind:this={img}
            class="object-cover size-24 rounded-full {imgClass}"
            aria-current={selected}
            src={image || fallbackImage}
            alt=""
            on:error={handleImageError}
            on:load={handleImageLoad}
        />

        <!--img
            src="/images/check.svg"
            alt="Icon"
            class="absolute top-3 right-3 w-6 h-6 transform translate-x-0 translate-y-0 bg-white rounded-full z-10"
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

    /*@keyframes rotate {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    .circle-border {
        border-radius: 50%;
        position: relative;
        display: inline-block;
        margin: 10px;
    }

    .circle-border::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 50%;
        z-index: 1;
        animation: rotate 12s linear infinite;
    }

    .circle-border::after {
        content: "";
        position: absolute;
        top: 6px;
        left: 6px;
        right: 6px;
        bottom: 6px;
        background: white;
        border-radius: 50%;
        z-index: 2;
    }

    .circle-border img {
        width: calc(100% - 10px);
        height: calc(100% - 10px);
        object-fit: cover;
        border-radius: 50%;
        position: absolute;
        top: 5px;
        left: 5px;
        z-index: 3;
    }

    .gradient-border::before {
        background: conic-gradient(
            red,
            orange,
            yellow,
            green,
            blue,
            indigo,
            violet,
            red
        );
    }*/
</style>
