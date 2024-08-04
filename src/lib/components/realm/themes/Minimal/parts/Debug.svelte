<script lang="ts">
    export let meta;
</script>

{#if meta}
    <div
        class="flex flex-col text-info leading-relaxed p-4 bg-white border-t bottom-0"
    >
        <div class="mt-2 font-light leading-relaxed break-all">
            <pre><code class="json -minial-code"
                    >{JSON.stringify(meta, null, 4)}</code
                ></pre>
        </div>
    </div>
{/if}

<style>
    .-minial-code {
        font-family: stern-pro, "LXGW WenKai TC", system-ui, sans-serif;
        font-weight: 400;
    }
</style>
