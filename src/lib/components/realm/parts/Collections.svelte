<script lang="ts">
    import { afterUpdate } from "svelte";
    import { debug } from "$lib/stores/Core";

    export let collections;
</script>

{#if $debug}
    {#if collections}
        <div
            class="flex justify-center text-info leading-relaxed space-x-4 p-4 break-all"
        >
            <span>Collections</span>
        </div>
    {/if}
{/if}
