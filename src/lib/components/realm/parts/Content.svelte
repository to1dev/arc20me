<script lang="ts">
    import { sanitize } from "@jill64/universal-sanitizer";
    import DOMPurify from "isomorphic-dompurify";
    //import { marked } from "marked";

    export let text;

    let clean: string | Promise<string> | null = null;

    try {
        if (text) {
            /*clean = sanitize(text, {
                sanitizeHtml: {
                    allowedTags: ["div", "video", "track"],
                    allowedAttributes: {
                        div: ["class"],
                        video: [
                            "class",
                            "src",
                            "autoplay",
                            "muted",
                            "loop",
                            "controls",
                        ],
                        track: ["kind"],
                    },
                    allowedSchemes: ["http", "https"],
                },
            });*/
            //clean = marked.parse(text);
            // clean = sanitizeHtml(text, { allowedTags: ["br", "div", "video"] });
            clean = DOMPurify.sanitize(text);
        }
    } catch (e) {
        console.error((e as Error).message);
        clean = null;
    }
</script>

<div class="mt-2 text-slate-500 font-light leading-relaxed">
    <div class="m-2">
        {#if clean}
            {@html clean}
        {/if}
    </div>
</div>

<style>
</style>
