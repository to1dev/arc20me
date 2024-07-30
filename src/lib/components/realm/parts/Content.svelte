<script lang="ts">
    import DOMPurify from "isomorphic-dompurify";

    export let text;

    const clean = DOMPurify.sanitize(text);
</script>

<div class="mt-2 text-slate-500 font-light leading-relaxed">
    <div class="m-2">
        {@html clean}
    </div>
</div>

<style>
</style>
