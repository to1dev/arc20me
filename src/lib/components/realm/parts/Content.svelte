<script lang="ts">
    import DOMPurify from "isomorphic-dompurify";
    import { onMount } from "svelte";

    export let text: string | null = null;

    let clean: string | null = null;
    if (text) {
        clean = DOMPurify.sanitize(text);
    }
</script>

<div class="mt-2 text-slate-500 font-light leading-relaxed">
    <div class="m-2">
        {#if clean}
            {@html clean}
        {/if}
    </div>
</div>

<style>
</style>
