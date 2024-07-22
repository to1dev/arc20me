<script lang="ts">
    import { parseAtomicalIdfromURN } from "$lib/utils/ponytail";
    import { afterUpdate, onMount } from "svelte";
    import Swiper from "swiper/bundle";
    import "swiper/swiper-bundle.css";

    afterUpdate(async () => {
        var swiper = new Swiper(".swiper", {
            effect: "cards",
            grabCursor: true,
        });
    });

    export let collections;
</script>

{#if collections}
    <div class="m-8">
        <div class="swiper">
            <div class="swiper-wrapper">
                {#each Object.entries(collections) as [_, value]}
                    <div class="swiper-slide">
                        <img
                            class="object-none"
                            src={`https://s1.arc20.me/images/${parseAtomicalIdfromURN(value?.image)?.id}`}
                            alt="Shoes"
                        />
                    </div>
                {/each}
            </div>
        </div>
    </div>
{/if}

<style>
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

    .swiper-slide img {
        width: 100%;
        height: 100%;
        object-fit: cover;
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
