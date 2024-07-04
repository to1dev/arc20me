<script lang="ts">
    import { onMount } from "svelte";

    export let image;

    let random: number | null = null;

    onMount(async () => {
        random = Math.floor(Math.random() * 30) + 1;
    });
</script>

{#if random !== null}
    <img
        class="h-32 w-32 bg-white p-2 rounded-full"
        src={image ? image : `/images/loading/animals/${random}.gif`}
        alt=""
    />
{/if}
