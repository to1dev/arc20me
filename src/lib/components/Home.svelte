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

    let desc: string | null = null;
    let realm: string = "";

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
        //realm = strim(target.value);
        realm = target.value.trim();
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

<div class="py-6 sm:py-8 lg:py-12">
    <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
        <h1
            class="mb-4 text-center text-4xl font-bold md:mb-8 lg:text-6xl text-warning alkatra"
        >
            Realm
        </h1>

        <div class="flex justify-center">
            <div
                class="inline-block h-16 text-center max-w-md text-lg text-neutral-400"
            >
                {#if desc != null}
                    <p>{desc}</p>
                {/if}
            </div>
        </div>

        <form on:submit={handleSubmit} class="mx-auto max-w-xl rounded-lg">
            <div class="flex flex-col gap-4 p-4 md:p-8">
                <div class="mb-2 relative">
                    <input
                        name="realm"
                        class="w-full rounded-full border-2 bg-neutral-900 px-8 py-4 text-neutral-400 placeholder-neutral-500 outline-none border-neutral-700 shadow-xl shadow-gray-900/20 transition duration-100"
                        bind:value={realm}
                        on:input={handleInput}
                        on:keydown={handleKeydown}
                    />
                    <button
                        type="button"
                        class="absolute top-1/2 right-4 transform -translate-y-1/2 rounded-full w-8 h-8 flex items-center justify-center text-neutral-400 hover:text-neutral-300 bg-neutral-800"
                        class:hidden={realm === ""}
                        on:click={clearInput}
                        on:mousedown={preventFocus}
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
                            class="flex-shrink-0 size-4 icon icon-tabler icons-tabler-outline icon-tabler-x"
                            ><path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                            /><path d="M18 6l-12 12" /><path
                                d="M6 6l12 12"
                            /></svg
                        ></button
                    >
                </div>

                <div class="flex flex-col md:flex-row justify-center gap-4">
                    <button
                        class="rounded-full btn btn-primary no-animation text-base min-w-32 px-8 py-3 text-center font-semibold text-base-content disabled:bg-primary"
                        disabled={realm === ""}
                        on:click={handleButtonClick}
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
                            class="w-5 h-5 icon icon-tabler icons-tabler-outline icon-tabler-search"
                            ><path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                            /><path
                                d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"
                            /><path d="M21 21l-6 -6" /></svg
                        >Search
                    </button>
                    <button
                        class="rounded-full btn btn-accent no-animation text-base min-w-32 px-8 py-3 text-center font-semibold text-base-content"
                    >
                        <span class="emoji">🤞</span>Lucky
                    </button>
                </div>
            </div>
        </form>
    </div>
</div>
