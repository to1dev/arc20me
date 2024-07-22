<script lang="ts">
    import { parseAtomicalIdfromURN } from "$lib/utils/ponytail";
    import { afterUpdate } from "svelte";
    import "keen-slider/keen-slider.min.css";
    import KeenSlider from "keen-slider";
    import { slide } from "svelte/transition";

    function scaleElement(element: any, portion: number) {
        var scale_size = 0.7;
        var scale = 1 - (scale_size - scale_size * portion);
        var style = `scale(${scale})`;
        element.style.transform = style;
        element.style["-webkit-transform"] = style;
    }

    let slider: any = null;
    afterUpdate(async () => {
        //var slider = new KeenSlider("#my-keen-slider");
        if (slider) {
            slider = new KeenSlider("#my-keen-slider", {
                loop: true,
                detailsChanged: (s) => {
                    const slides = s.track.details.slides;
                    s.slides.forEach((element: any, idx: number) => {
                        scaleElement(
                            element.querySelector("div"),
                            slides[idx].portion
                        );
                    });
                },
                initial: 2,
            });
        }
    });

    export let collections;
</script>

{#if collections}
    <!--div
        class="flex justify-center text-info leading-relaxed space-x-4 p-4 break-all"
    ></div-->

    <div id="my-keen-slider" class="keen-slider zoom-out" bind:this={slider}>
        {#each Object.entries(collections) as [_, value]}
            <div class="keen-slider__slide zoom-out__slide">
                <div>
                    <img
                        src={`https://s1.arc20.me/images/${parseAtomicalIdfromURN(value?.image)?.id}`}
                        alt="Shoes"
                    />
                </div>
            </div>
        {/each}
    </div>
{/if}

<style>
    .zoom-out {
        perspective: 1000px;
        height: 50vw;
    }

    @media (min-width: 768px) {
        .zoom-out {
            height: 300px;
        }
    }

    .zoom-out__slide div {
        overflow: hidden;
        position: absolute;
        width: 100%;
        height: 100%;
    }

    .zoom-out__slide img {
        background-color: transparent;
        width: 100%;
        height: auto;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateY(-50%) translateX(-50%);
        -webkit-transform: translateY(-50%) translateX(-50%);
    }
</style>
