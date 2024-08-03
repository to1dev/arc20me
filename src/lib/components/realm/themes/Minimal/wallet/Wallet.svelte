<script lang="ts">
    let isMinimized: boolean = false;

    function toggleMinimize() {
        isMinimized = !isMinimized;
    }
</script>

{#if !isMinimized}
    <div class="fixed bottom-0 end-0 z-[60] sm:max-w-md w-full mx-auto p-6">
        <!-- Card -->
        <div
            class="p-4 backdrop-filter backdrop-blur-sm bg-opacity-90 rounded-2xl shadow-2xl bg-neutral-900/60 shadow-black/70"
        >
            <div class="flex justify-between items-center gap-x-5 sm:gap-x-10">
                <h2 class="font-semibold text-white">My Wallet</h2>
                <button
                    type="button"
                    class="duration-200 inline-flex rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-gray-600 hover:bg-neutral-800 text-neutral-300"
                    on:click={toggleMinimize}
                >
                    <span class="sr-only">Dismiss</span>
                    <svg
                        class="flex-shrink-0 size-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        ><path d="M18 6 6 18"></path><path d="m6 6 12 12"
                        ></path></svg
                    >
                </button>
            </div>
            <p class="mt-2 text-2xl text-white">
                A small but mighty Bitcoin wallet, perfect for handling
                Atomicals and Realm protocols with ease <span class="emoji"
                    >🚀</span
                >.
            </p>
            <div class="mt-5 mb-2 w-full flex gap-x-2">
                <div class="grid w-full">
                    <button
                        type="button"
                        class="theme-minial-button duration-150 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-lg rounded-full bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
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
                            class="icon icon-tabler icons-tabler-outline icon-tabler-receipt-bitcoin"
                            ><path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                            /><path
                                d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2"
                            /><path
                                d="M9 7h4.09c1.055 0 1.91 .895 1.91 2s-.855 2 -1.91 2c1.055 0 1.91 .895 1.91 2s-.855 2 -1.91 2h-4.09"
                            /><path d="M10 11h4" /><path d="M10 6v10v-9" /><path
                                d="M13 6v1"
                            /><path d="M13 15v1" /></svg
                        >Receive
                    </button>
                </div>
                <div class="grid w-full">
                    <button
                        type="button"
                        class="theme-minial-button duration-150 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-lg rounded-full bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
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
                            class="icon icon-tabler icons-tabler-outline icon-tabler-receipt-refund"
                            ><path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                            /><path
                                d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2"
                            /><path
                                d="M15 14v-2a2 2 0 0 0 -2 -2h-4l2 -2m0 4l-2 -2"
                            /></svg
                        >Send
                    </button>
                </div>
            </div>
            <div class="grid w-full">
                <button
                    type="button"
                    class="theme-minial-button duration-150 w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-lg rounded-full bg-white text-gray-800 shadow-sm hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
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
                        class="icon icon-tabler icons-tabler-outline icon-tabler-wallet"
                        ><path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                        /><path
                            d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12"
                        /><path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" /></svg
                    >Manage
                </button>
            </div>
        </div>
        <!-- End Card -->
    </div>
{:else}
    <button
        class="minimized-button z-[60] backdrop-filter backdrop-blur-sm bg-opacity-90 shadow-2xl bg-neutral-900/60 shadow-black/70"
        on:click={toggleMinimize}
    >
        Minibar
    </button>
{/if}

<style>
    .theme-minial-button {
        font-family: "alexander-quill", sans-serif;
        font-weight: 400;
        font-style: normal;
    }

    .minimized-button {
        padding: 0.5rem 1rem;
        border-radius: 0.75rem;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        color: #ffffff;
        position: fixed;
        bottom: 1.5rem;
        right: 1.5rem;
    }
</style>
