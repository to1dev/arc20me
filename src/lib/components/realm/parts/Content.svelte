<script lang="ts">
    import DOMPurify from "dompurify";
    import { isDk } from "$lib/stores/Realm";

    export let text;
</script>

<div class="mt-2 text-gray-900 font-light leading-relaxed">
    {#if $isDk}
        {#if text?.enUS}
            <div class="m-2">
                {DOMPurify.sanitize(text.enUS)}
            </div>
        {/if}
        {#if text?.zhCN}
            <div class="m-2">
                {DOMPurify.sanitize(text.zhCN)}
            </div>
        {/if}
    {:else if text}
        <div class="m-2">
            {DOMPurify.sanitize(text)}
        </div>
    {/if}
</div>
