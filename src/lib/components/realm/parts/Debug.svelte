<script lang="ts">
    export let meta;
</script>

<div class="flex flex-col justify-center items-center p-4 bg-white border-t">
    {#if meta}
        <div class="mt-2 font-light leading-relaxed break-all">
            {JSON.stringify(meta, null, 4)}
        </div>
    {/if}
</div>
