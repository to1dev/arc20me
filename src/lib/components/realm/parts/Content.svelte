<script lang="ts">
    import DOMPurify from "dompurify";
    import { isDk } from "$lib/stores/Realm";

    const apiUrl = import.meta.env.VITE_API_URL;
    const seq = import.meta.env.VITE_PERSISTENT_SEQUENCE;
    const seq2 = import.meta.env.PERSISTENT_SEQUENCE;
    console.log("API URL:", apiUrl);
    console.log("seq:", seq);
    console.log("seq2:", seq2);

    export let text;
</script>

<div class="mt-2 text-gray-600 leading-relaxed">
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
