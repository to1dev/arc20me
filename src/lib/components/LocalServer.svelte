<script lang="ts">
    import { onMount } from "svelte";

    async function fetchData(): Promise<string | null> {
        try {
            const response = await fetch("http://127.0.0.1:9999/json");
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            return JSON.stringify(data, null, 4);
        } catch (error) {
            console.error("Error fetching data:", error);
            return null;
        }
    }

    let error: string | null = null;
    let isLoading: boolean = false;
    let corsResult: string | null = null;

    onMount(async () => {
        try {
            isLoading = true;
            corsResult = await fetchData();
            error = null;
        } catch (e) {
            error = (e as Error).message;
        } finally {
            isLoading = false;
        }
    });
</script>

{#if corsResult}
    <div
        class="flex flex-col justify-center items-center p-4 bg-white border-t"
    >
        <div class=" mt-2 leading-relaxed break-words">
            {corsResult}
        </div>
    </div>
{/if}
