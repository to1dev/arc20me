<script lang="ts">
    export let name;
    export let realm;

    let s: string | null = null;
</script>

<h2 class="text-gray-800 text-3xl font-bold mb-2 min-h-[1rem]">
    {#if realm != null}
        <span>{name ? name : realm}</span>
    {/if}
</h2>
{#if realm != null}
    <span class="lowercase">+{realm}</span>
{/if}
