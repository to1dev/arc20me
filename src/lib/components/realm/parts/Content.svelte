<script lang="ts">
    import DOMPurify from "dompurify";
    import { isDk } from "$lib/stores/Realm";

    export let text;
</script>

<div class="mt-2 text-slate-500 font-light leading-relaxed text-justify">
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
