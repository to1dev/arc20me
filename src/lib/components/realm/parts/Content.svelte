<script lang="ts">
    import { onMount, onDestroy } from "svelte";
    import DOMPurify from "dompurify";

    export let text;

    let sanitizedText = "";

    onMount(() => {
        sanitizedText = DOMPurify.sanitize(text);
    });
</script>

<div class="mt-2 text-slate-500 font-light leading-relaxed">
    <div class="m-2">
        <p>
            {#if sanitizedText}
                {@html sanitizedText}
            {/if}
        </p>
    </div>
</div>

<style>
</style>
