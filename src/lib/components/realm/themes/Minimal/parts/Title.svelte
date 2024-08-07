<script lang="ts">
    export let name;
    export let realm;
    export let uname;
</script>

<h2 class="text-gray-800 text-4xl font-bold mb-2 title">
    {#if uname || name}
        <span>{name || uname}</span>
    {:else}
        <span class="loading loading-dots loading-lg text-info"></span>
    {/if}
</h2>
{#if realm}
    <span class="lowercase">+{realm}</span>
{:else}
    <span class="lowercase text-white">...</span>
{/if}

<style>
    .title {
        font-family: var(--primary-title-font);
        font-weight: 400;
        font-style: normal;
    }
</style>
