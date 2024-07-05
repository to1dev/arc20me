<script lang="ts">
    export let wallets;
</script>

{#if wallets}
    <div class="flex justify-center space-x-4 p-4 break-all">
        {JSON.stringify(wallets)}
    </div>
{/if}
