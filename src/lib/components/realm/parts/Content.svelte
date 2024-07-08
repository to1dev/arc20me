<script lang="ts">
    import DOMPurify from "dompurify";
    import { isDk } from "$lib/stores/Realm";

    export let text;
</script>

<div class="mt-2 text-gray-600 leading-relaxed">
    {#if $isDk}
        {#if text?.enUS}
            {DOMPurify.sanitize(text.enUS)}
        {/if}
        {#if text?.zhCN}
            {DOMPurify.sanitize(text.zhCN)}
        {/if}
    {:else if text}
        {DOMPurify.sanitize(text)}
    {/if}
</div>
