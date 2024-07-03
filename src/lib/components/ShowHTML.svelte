<script lang="ts">
    import { onMount } from "svelte";
    import DOMPurify from "dompurify";

    let container: HTMLDivElement;

    // 定义 HTML 源码字符串，并移除脚本部分
    const rawHtml = `
    <div class="flex justify-center items-center p-4 bg-white border-t text-sm">Hello world!</div>
    `;

    let sanitizedHtml: string;

    onMount(() => {
        sanitizedHtml = DOMPurify.sanitize(rawHtml);

        if (container) {
            container.innerHTML = sanitizedHtml;
        }
    });
</script>

<div class="container" bind:this={container}></div>
