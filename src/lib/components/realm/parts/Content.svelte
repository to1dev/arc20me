<script lang="ts">
    import { onDestroy } from "svelte";
    import DOMPurify from "dompurify";

    export let text;
</script>

<div class="mt-2 text-slate-500 font-light leading-relaxed">
    {#if text}
        <div class="m-2">
            <p>
                {@html DOMPurify.sanitize(text)}
            </p>
        </div>
    {/if}
</div>

<style>
</style>
