<script lang="ts">
    import DOMPurify from "dompurify";
    import { isDk } from "$lib/stores/Realm";

    export let text;
</script>

<div class="mt-2 text-gray-600 leading-relaxed playwrite-fr-moderne">
    {#if $isDk}
        {#if text?.enUS}
            <div
                class="p-4 mb-4 text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
            >
                {DOMPurify.sanitize(text.enUS)}
            </div>
        {/if}
        {#if text?.zhCN}
            <div
                class="p-4 mb-4 text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
            >
                {DOMPurify.sanitize(text.zhCN)}
            </div>
        {/if}
    {:else if text}
        <div
            class="p-4 mb-4 text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
        >
            {DOMPurify.sanitize(text)}
        </div>
    {/if}
</div>
