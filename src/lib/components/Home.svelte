<script lang="ts">
    import { onMount } from "svelte";

    const descs = [
        `A gateway to the arcane intricacies of virtual realms, enhancing
                your journey.`,
        `A portal to the hidden dimensions of virtual worlds, elevating your exploration.`,
        `Journey through the esoteric landscapes of digital realms with enhanced clarity.`,
        `Unlocking the veiled secrets of the virtual universe, enriching your quest.`,
        `Embark on a voyage through the mystical corridors of digital domains.`,
        `Discover the enigmatic depths of virtual realities, amplifying your experience.`,
    ];

    let desc: string;
    let realm: string = "";

    let inputElement: HTMLInputElement;

    function clearInput() {
        realm = "";
    }

    function preventFocus(event: MouseEvent) {
        event.preventDefault();
    }

    onMount(() => {
        realm = "";
        desc = descs[Math.floor(Math.random() * descs.length)];
    });

    function handleInput(event: Event) {
        const target = event.target as HTMLInputElement;
        realm = target.value;
    }

    function handleKeydown(event: KeyboardEvent) {
        if (event.key === "Enter" && realm) {
            event.preventDefault();
            window.location.href = `${window.location.origin}/${realm}`;
        }
    }

    function handleButtonClick(event: MouseEvent) {
        event.preventDefault();
        if (realm) {
            window.location.href = `${window.location.origin}/${realm}`;
        }
    }

    function handleSubmit(event: Event) {
        event.preventDefault();
        if (realm) {
            window.location.href = `${window.location.origin}/${realm}`;
        }
    }
</script>

<div class="relative overflow-hidden min-h-screen">
    <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-24">
        <div class="text-center">
            <h1 class="text-4xl sm:text-6xl font-bold text-warning alkatra">
                Realm
            </h1>

            <p class="mt-8 text-neutral-400 text-base lg:min-h-8 min-h-14">
                {#if desc}{desc}{/if}
            </p>

            <div class="mt-7 sm:mt-12 mx-auto max-w-xl relative">
                <form on:submit={handleSubmit}>
                    <div
                        class="relative z-10 flex space-x-3 p-3 border rounded-lg shadow-lg bg-neutral-900 border-neutral-700 shadow-gray-900/20"
                    >
                        <div class="flex-[1_0_0%]">
                            <label
                                for="search-realm"
                                class="block text-sm font-medium text-white"
                                ><span class="sr-only">Search realm</span
                                ></label
                            >
                            <input
                                name="search-realm"
                                id="search-realm"
                                class="py-2.5 px-4 block w-full rounded-lg border-none bg-neutral-900 text-neutral-400 placeholder-neutral-500 input pl-10 outline-none focus:outline-none focus:ring-2 transition-border duration-200"
                                placeholder="Search realm"
                                bind:value={realm}
                                on:input={handleInput}
                                on:keydown={handleKeydown}
                            />
                            <div
                                class="absolute top-1/2 end-20 -translate-y-1/2"
                            >
                                <button
                                    type="button"
                                    class="duration-200 size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent hover:bg-neutral disabled:opacity-50 disabled:pointer-events-none text-neutral-400 hover:text-neutral-300 bg-neutral-800"
                                    class:hidden={realm === ""}
                                    on:click={clearInput}
                                    on:mousedown={preventFocus}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="flex-shrink-0 size-4 icon icon-tabler icons-tabler-outline icon-tabler-x"
                                        ><path
                                            stroke="none"
                                            d="M0 0h24v24H0z"
                                            fill="none"
                                        /><path d="M18 6l-12 12" /><path
                                            d="M6 6l12 12"
                                        /></svg
                                    >
                                </button>
                            </div>
                        </div>
                        <div class="flex-[0_0_auto]">
                            <button
                                type="submit"
                                class="transition-colors duration-300 size-[46px] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                                disabled={realm === ""}
                                on:click={handleButtonClick}
                            >
                                <svg
                                    class="flex-shrink-0 size-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    ><circle cx="11" cy="11" r="8" /><path
                                        d="m21 21-4.3-4.3"
                                    /></svg
                                >
                            </button>
                        </div>
                    </div>
                </form>

                <div
                    class="hidden md:block absolute top-0 end-0 -translate-y-12 translate-x-20"
                >
                    <svg
                        class="w-16 h-auto text-orange-500"
                        width="121"
                        height="135"
                        viewBox="0 0 121 135"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                            stroke="currentColor"
                            stroke-width="10"
                            stroke-linecap="round"
                        />
                        <path
                            d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                            stroke="currentColor"
                            stroke-width="10"
                            stroke-linecap="round"
                        />
                        <path
                            d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                            stroke="currentColor"
                            stroke-width="10"
                            stroke-linecap="round"
                        />
                    </svg>
                </div>

                <div
                    class="hidden md:block absolute bottom-0 start-0 translate-y-10 -translate-x-32"
                >
                    <svg
                        class="w-40 h-auto text-cyan-500"
                        width="347"
                        height="188"
                        viewBox="0 0 347 188"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426"
                            stroke="currentColor"
                            stroke-width="7"
                            stroke-linecap="round"
                        />
                    </svg>
                </div>
            </div>

            {#if false}
                <div class="mt-10 sm:mt-20">
                    <button
                        class="transition-colors duration-300 m-1 py-3 px-4 inline-flex items-center gap-x-2 font-medium rounded-lg border shadow-sm disabled:opacity-50 disabled:pointer-events-none bg-neutral-900 border-neutral-700 text-secondary hover:bg-neutral-800"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="icon icon-tabler icons-tabler-outline icon-tabler-report"
                            ><path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                            /><path
                                d="M8 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h5.697"
                            /><path d="M18 14v4h4" /><path
                                d="M18 11v-4a2 2 0 0 0 -2 -2h-2"
                            /><path
                                d="M8 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"
                            /><path
                                d="M18 18m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"
                            /><path d="M8 11h4" /><path d="M8 15h3" /></svg
                        >Business
                    </button>
                    <button
                        class="transition-colors duration-300 m-1 py-3 px-4 inline-flex items-center gap-x-2 font-medium rounded-lg border shadow-sm disabled:opacity-50 disabled:pointer-events-none bg-neutral-900 border-neutral-700 text-secondary hover:bg-neutral-800"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="icon icon-tabler icons-tabler-outline icon-tabler-report"
                            ><path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                            /><path
                                d="M8 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h5.697"
                            /><path d="M18 14v4h4" /><path
                                d="M18 11v-4a2 2 0 0 0 -2 -2h-2"
                            /><path
                                d="M8 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"
                            /><path
                                d="M18 18m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"
                            /><path d="M8 11h4" /><path d="M8 15h3" /></svg
                        >Business
                    </button>
                </div>
            {/if}
        </div>
    </div>
</div>
