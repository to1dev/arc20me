<script lang="ts">
    import { marked } from "marked";

    export let text;
    const clean = marked.parse(text);
</script>

<div class="mt-2 text-slate-500 font-light leading-relaxed">
    <div class="m-2">
        {@html clean}
    </div>
</div>

<style>
</style>
