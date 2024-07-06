<script lang="ts">
    import punycode from "punycode/";

    export let name;
    export let realm;

    let s: string | null = null;
</script>

<h2 class="text-gray-800 text-3xl font-bold mb-2 alkatra">
    {#if realm != null}
        <span>{name ? name : punycode.toUnicode(realm)}</span>
    {:else}
        <span class="loading loading-dots loading-lg text-info"></span>
    {/if}
</h2>
{#if realm != null}
    <span class="lowercase">+{realm}</span>
{:else}
    <span class="lowercase text-white">...</span>
{/if}
