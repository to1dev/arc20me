<script lang="ts">
    export let text;
</script>

<div class="mt-2 text-slate-500 font-light leading-relaxed">
    <div class="m-2">
        {#if text}
            {@html text}
        {/if}
    </div>
</div>

<style>
</style>
