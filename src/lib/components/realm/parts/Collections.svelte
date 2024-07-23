<script lang="ts">
    import { parseAtomicalIdfromURN } from "$lib/utils/ponytail";
    import { afterUpdate, onMount } from "svelte";
    import Swiper from "swiper/bundle";
    import "swiper/swiper-bundle.css";

    afterUpdate(async () => {
        var swiper = new Swiper("#swiper", {
            effect: "cards",
            grabCursor: true,
        });
    });

    interface CollectionItem {
        name: string;
        image: string;
    }

    export let collections: Record<string, CollectionItem> = {};
</script>

{#if collections}
    <div class="overflow-hidden p-2">
        <div id="swiper" class="swiper p-4">
            <div class="swiper-wrapper">
                {#each Object.entries(collections) as [_, value]}
                    <div class="swiper-slide ring-4 ring-white">
                        <div
                            class="card image-full w-full h-full shadow-xl bg-opacity-5"
                        >
                            <div class="card-body">
                                <p class="font-light text-white">
                                    {value?.name}
                                </p>
                            </div>
                            <figure>
                                <img
                                    class="object-cover"
                                    src={`https://s1.arc20.me/images/${parseAtomicalIdfromURN(value?.image)?.id}`}
                                    alt="Shoes"
                                />
                            </figure>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>
{/if}

<style>
    .card.image-full:before {
        --tw-bg-opacity: 0.15;
    }

    .swiper {
        width: 240px;
        height: 320px;
    }

    .swiper-slide {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 18px;
        font-size: 22px;
        font-weight: bold;
        color: #fff;
    }

    .swiper-slide:nth-child(1n) {
        background-color: rgb(206, 17, 17);
    }

    .swiper-slide:nth-child(2n) {
        background-color: rgb(0, 140, 255);
    }

    .swiper-slide:nth-child(3n) {
        background-color: rgb(10, 184, 111);
    }

    .swiper-slide:nth-child(4n) {
        background-color: rgb(211, 122, 7);
    }

    .swiper-slide:nth-child(5n) {
        background-color: rgb(118, 163, 12);
    }

    .swiper-slide:nth-child(6n) {
        background-color: rgb(180, 10, 47);
    }

    .swiper-slide:nth-child(7n) {
        background-color: rgb(35, 99, 19);
    }

    .swiper-slide:nth-child(8n) {
        background-color: rgb(0, 68, 255);
    }

    .swiper-slide:nth-child(9n) {
        background-color: rgb(218, 12, 218);
    }

    .swiper-slide:nth-child(10n) {
        background-color: rgb(54, 94, 77);
    }
</style>
