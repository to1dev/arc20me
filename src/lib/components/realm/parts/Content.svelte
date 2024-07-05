<script lang="ts">
    import DOMPurify from "dompurify";

    export let text;
</script>

<div class="mt-2 text-gray-600 font-light leading-relaxed">
    {#if text?.enUS}
        {DOMPurify.sanitize(text.enUS)}
    {/if}
    {#if text?.zhCN}
        {DOMPurify.sanitize(text.zhCN)}
    {/if}
</div>
