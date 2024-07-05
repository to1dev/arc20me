<script lang="ts">
    export let collections;
</script>

{#if collections}
    <div class="flex justify-center space-x-4 p-4 break-all">
        {JSON.stringify(collections)}
    </div>
{/if}
