<script lang="ts">
    import { toUnicode } from "punycode";

    export let realm: string | null = null;

    let uname: string | null = null;
    if (realm) {
        uname = toUnicode(realm);
    }
</script>

<svelte:head>
    <title
        >{uname ? uname : ""} | Your Personal Gateway on the Bitcoin Blockchain</title
    >
</svelte:head>

<div data-theme="retro" class="min-h-screen p-5">
    <div class="max-w-4xl mx-auto p-4 bg-white">
        <h1 class="text-4xl font-bold mb-6">Styles and CSS</h1>
        <section class="mb-8">
            <h2 class="text-2xl font-semibold mb-4">Scoped styles</h2>
            <p class="mb-4">
                Styles in Svelte are scoped by default. This means that styles
                defined in a component are applied only to that component.
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
