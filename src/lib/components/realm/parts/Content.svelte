<script lang="ts">
    import { onDestroy } from "svelte";
    import DOMPurify from "dompurify";
    import { isDk } from "$lib/stores/Realm";

    export let text;

    let _dk = false;

    const unsubscribe = isDk.subscribe((value) => {
        _dk = value;
    });

    onDestroy(() => {
        unsubscribe();
    });
</script>

<div class="mt-2 text-slate-500 font-light leading-relaxed">
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
            <p>
                {@html DOMPurify.sanitize(text)}
            </p>
        </div>
    {/if}
</div>

<style>
</style>
