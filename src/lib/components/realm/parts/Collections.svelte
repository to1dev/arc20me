<script lang="ts">
    import { parseAtomicalIdfromURN } from "$lib/utils/ponytail";
    import { onMount } from "svelte";
    import Swiper from "swiper/bundle";
    import "swiper/swiper-bundle.css";

    onMount(() => {
        var swiper = new Swiper("#swiper", {
            effect: "cards",
            grabCursor: true,
            loop: true,
        });
    });

    interface CollectionItem {
        name: string;
        desc: string;
        image: string;
    }

    export let collections: Record<string, CollectionItem> = {};
</script>

{#if collections && Object.keys(collections).length > 0}
    <div class="overflow-hidden p-2">
        <div
            id="swiper"
            class="block overflow-hidden relative w-60 h-80 p-4 mx-auto z-auto"
        >
            <div class="swiper-wrapper">
                {#each Object.entries(collections) as [_, value], i}
                    <div class="swiper-slide ring-4 ring-white">
                        <div
                            class="card image-full w-full h-full shadow-xl bg-opacity-5"
                        >
                            <div class="card-body p-3">
                                <p
                                    class="font-light text-white playwrite-fr-moderne"
                                >
                                    {value?.name}
                                </p>
                                <div class="card-actions justify-end">
                                    <button
                                        class="btn btn-ghost btn-circle"
                                        on:click={() => console.log(i)}
                                        ><svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="icon icon-tabler icons-tabler-outline icon-tabler-zoom-scan"
                                            ><path
                                                stroke="none"
                                                d="M0 0h24v24H0z"
                                                fill="none"
                                            /><path
                                                d="M4 8v-2a2 2 0 0 1 2 -2h2"
                                            /><path
                                                d="M4 16v2a2 2 0 0 0 2 2h2"
                                            /><path
                                                d="M16 4h2a2 2 0 0 1 2 2v2"
                                            /><path
                                                d="M16 20h2a2 2 0 0 0 2 -2v-2"
                                            /><path
                                                d="M8 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"
                                            /><path d="M16 16l-2.5 -2.5" /></svg
                                        ></button
                                    >
                                </div>
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
        --tw-bg-opacity: 0;
    }

    .swiper-slide {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 18px;
    }
</style>
