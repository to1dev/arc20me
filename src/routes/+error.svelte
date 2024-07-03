<script lang="ts">
    import { page } from "$app/stores";
</script>

{#if $page}
    <div class="flex items-center justify-center min-h-screen bg-gray-800">
        <div class="text-center space-y-4">
            <h2 class="h2 text-info">
                {$page.status}:{#if $page.error}
                    {$page.error.message}
                {/if}
            </h2>
            <p class="text-warning">We're sorry, something went wrong.</p>
            <div
                class="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3"
            >
                <a
                    class="btn w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
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
