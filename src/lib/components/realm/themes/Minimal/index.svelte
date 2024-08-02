<script lang="ts">
    import { toUnicode } from "punycode";

    export let realm: string | null = null;

    let uname: string | null = null;
    if (realm) {
        uname = toUnicode(realm);
    }
</script>

<svelte:head>
    <link rel="stylesheet" href="https://use.typekit.net/fcb2rob.css" />
    <title
        >{uname ? uname : ""} | Your Personal Gateway on the Bitcoin Blockchain</title
    >
</svelte:head>

<div data-theme="retro" class="min-h-screen p-5 theme-minial bg-white">
    <div class="max-w-4xl mx-auto p-5 rounded-md leading-relaxed">
        <h1 class="text-3xl font-bold mb-6">Svelte by Example: Styles & CSS</h1>
        <section class="mb-8">
            <h2 class="text-2xl font-semibold mb-4">Scoped styles</h2>
            <p class="mb-4 italic">
                In this example, we'll explore Svelte's styling options on a
                simplified Todo component.
            </p>
            <p class="mb-4">Example:</p>
        </section>

        <section class="mb-8">
            <h2 class="text-2xl font-semibold mb-4">Global styles</h2>
            <p class="mb-4">
                Global styles can be defined using the <code
                    class="bg-gray-200 px-1 rounded">:global</code
                > keyword.
            </p>
            <p class="mb-4">Example:</p>
        </section>

        <section class="mb-8">
            <h2 class="text-2xl font-semibold mb-4">
                Component-specific styles
            </h2>
            <p class="mb-4">
                Svelte automatically scopes styles to the component. You can
                still define global styles if necessary.
            </p>
            <p class="mb-4">Example:</p>
        </section>
    </div>
</div>

<style>
    @media (min-width: 640px) {
        :root {
            --text-base: 19px;
            --baseline: calc(var(--text-base) * 1.5);
            --spacing: 1rem;
        }
    }

    :root {
        --orange: #fc2507;
        --gray-bg: #f9f9f9;
        --gray-border: #eee;
        --gray-text: #777;
        --font-body: "capitolina", system-ui, sans-serif;
        --font-code: "input-mono", monospace;
        --text-base: 18px;
        --text-code: 0.68em;
        --text-inline-code: 0.74em;
        --baseline: calc(var(--text-base) * 1.4);
        --spacing: 0.5rem;
    }

    .theme-minial {
        font-family: var(--font-body);
        font-weight: 300;
        font-size: var(--text-base);
        line-height: var(--baseline);
    }
</style>
