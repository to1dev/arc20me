<script lang="ts">
    import { debug } from "$lib/stores/Core";
    export let wallets;
</script>

{#if wallets}
    <div class="flex space-x-4 p-4 break-all">
        {#if $debug}
            <div class="text-info leading-relaxed">
                <span>Wallets</span>
                <pre><code>{JSON.stringify(wallets, null, 4)}</code></pre>
            </div>
        {/if}
    </div>
{/if}
