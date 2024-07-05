<script lang="ts">
    export let realmData;
</script>

<div class="flex flex-col justify-center items-center p-4 bg-white border-t">
    {#if realmData}
        <div class="mt-2 font-light leading-relaxed break-all">
            {JSON.stringify(realmData, null, 4)}
        </div>
    {/if}
</div>
