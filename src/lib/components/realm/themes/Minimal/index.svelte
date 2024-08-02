<script lang="ts">
    import { toUnicode } from "punycode";

    import Title from "./parts/Title.svelte";
    import Content from "./parts/Content.svelte";

    export let realm: string | null = null;
    export let debug: boolean = false;
    export let realmData: any | null = null;
    export let meta: any | null = null;
    export let profile: any | null = null;

    let uname: string | null = null;
    if (realm) {
        uname = toUnicode(realm);
    }
</script>

<svelte:head>
    <link rel="stylesheet" href="https://use.typekit.net/fcb2rob.css" />
    <link rel="stylesheet" href="https://cdn.tailwindcss.com" />
    <title
        >{uname ? uname : ""} | Your Personal Gateway on the Bitcoin Blockchain</title
    >
</svelte:head>

<div data-theme="retro" class="min-h-screen p-5 theme-minial bg-white">
    <div class="max-w-4xl mx-auto p-5 rounded-md leading-relaxed">
        <div class="text-center px-14 break-words"></div>
        <div class="mb-4">
            <Title name={profile?.name} realm={realmData?.realm} {uname} />
        </div>
        <section class="mb-8">
            <h2 class="text-2xl font-semibold mb-4">Scoped styles</h2>
            <p class="mb-4">
                <Content text={profile?.desc} />
            </p>
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
        --font-body: "capitolina", "LXGW WenKai TC", system-ui, sans-serif;
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
