<script lang="ts">
    import "../app.css";

    const metaSettings = {
        title: "Your Personal Gateway on the Bitcoin Blockchain",
        description: "",
        image: "",
    };
</script>

<svelte:head>
    <title>{metaSettings.title}</title>
</svelte:head>

<slot />
