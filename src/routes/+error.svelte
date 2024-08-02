<script lang="ts">
    import { page } from "$app/stores";
</script>

<svelte:head>
    <link rel="stylesheet" href="https://use.typekit.net/fcb2rob.css" />
</svelte:head>

{#if $page}
    <div
        class="flex items-center justify-center min-h-screen bg-gray-800 capitolina"
        data-theme="business"
    >
        <div class="text-center space-y-4">
            <h1 class="text-info text-lg">
                {$page.status}: {#if $page.error}
                    {$page.error.message}
                {/if}
            </h1>
            <p class="text-warning">We're sorry, something went wrong.</p>
            <div
                class="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3"
            >
                <a
                    class="btn no-animation w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-base font-semibold rounded-full bg-blue-600 text-base-content hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                    href="/"
                >
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
                        stroke-linejoin="round"><path d="m15 18-6-6 6-6" /></svg
                    >
                    Back to home
                </a>
            </div>
        </div>
    </div>
{/if}

<style lang="postcss">
    :root {
        --orange: #fc2507;
        --gray-bg: #f9f9f9;
        --gray-border: #eee;
        --gray-text: #777;
        --font-body: "capitolina", system-ui, sans-serif;
        --font-code: "input-mono", monospace;
        --text-base: 18px;
        --text-code: 0.68em;
        --text-inline-code: 0.74em;
        --baseline: calc(var(--text-base) * 1.4);
        --spacing: 0.5rem;
    }

    .capitolina {
        font-family: var(--font-body);
        font-weight: 300;
        font-size: var(--text-base);
        line-height: var(--baseline);
    }
</style>
