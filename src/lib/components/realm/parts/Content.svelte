<script lang="ts">
    import { onMount, onDestroy } from "svelte";
    import DOMPurify from "isomorphic-dompurify";

    export let text;
</script>

<div class="mt-2 text-slate-500 font-light leading-relaxed">
    <div class="m-2">
        {#if text}
            {@html DOMPurify.sanitize(text)}
        {/if}
    </div>
</div>

<style>
</style>
