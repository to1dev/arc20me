<script lang="ts">
    export let name;
    export let realm;
    export let uname;
</script>

<h2 class="text-gray-800 text-3xl font-bold mb-2">
    {#if uname || name}
        <span>{name || uname}</span>
    {:else}
        <span class="loading loading-dots loading-lg text-info"></span>
    {/if}
</h2>
{#if realm}
    <span class="lowercase italic">+{realm}</span>
{:else}
    <span class="lowercase italic text-white">...</span>
{/if}
