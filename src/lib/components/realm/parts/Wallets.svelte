<script lang="ts">
    export let wallets;
</script>

{#if wallets}
    <div class="flex space-x-4 p-4 break-all">
        <div class="text-info leading-relaxed">
            <span>Wallets</span>
            <pre><code>{JSON.stringify(wallets, null, 4)}</code></pre>
        </div>
    </div>
{/if}
