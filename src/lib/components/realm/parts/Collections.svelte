<script lang="ts">
    import { debug } from "$lib/stores/Realm";

    export let collections;
</script>

{#if collections}
    <div class="flex justify-center space-x-4 p-4 break-all">
        {#if $debug}
            <span>Collections</span>
            <pre><code>{JSON.stringify(collections, null, 4)}</code></pre>
        {/if}
    </div>
{/if}
