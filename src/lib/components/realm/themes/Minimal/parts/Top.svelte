<script lang="ts">
    export let showAtPixel = 1000;

    let scrollHeight = 0;

    const easeOutExpo = (x: number): number => {
        return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
    };

    const gotoTop = () => {
        const start = window.scrollY;
        const duration = 1000;
        let startTime: number | null = null;

        const animateScroll = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);
            const ease = easeOutExpo(percentage);

            window.scrollTo(0, start * (1 - ease));

            if (progress < duration) {
                requestAnimationFrame(animateScroll);
            }
        };

        requestAnimationFrame(animateScroll);
    };

    $: showGotoTop = scrollHeight > showAtPixel;
</script>

<svelte:window bind:scrollY={scrollHeight} />

{#if showGotoTop}
    <button on:click={gotoTop} class="goto__top">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
        >
            <g fill="none" stroke="currentColor" stroke-width="1.5">
                <path
                    fill="white"
                    d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"
                />
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m15 13.5l-3-3l-3 3"
                />
            </g>
        </svg>
    </button>
{/if}

<style>
    .goto__top {
        position: fixed;
        right: 1rem;
        bottom: 1rem;
        cursor: pointer;
        color: #999;
        border-radius: 0.15rem;
        transition-duration: 300ms;
        z-index: 999;
        background: none;
        border: none;
        padding: 0;
    }
    .goto__top:hover {
        transform: translateY(-10px);
        color: #000;
    }
</style>
