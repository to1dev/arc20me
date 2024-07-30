<script lang="ts">
    import { error } from "@sveltejs/kit";
    import { marked } from "marked";

    export let text;

    let clean: string | Promise<string> | null = null;

    try {
        if (text) {
            clean = marked.parse(text);
        }
    } catch (e) {
        console.error((e as Error).message);
        clean = null;
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
