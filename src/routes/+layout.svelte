<script lang="ts">
    import "../app.css";
    import { page } from "$app/stores";

    enum PageType {
        Homepage,
        BlogPage,
        AboutPage,
        ContactPage,
        OtherPage,
    }

    function getPageType(pageUrlPath: string): PageType {
        if (pageUrlPath === "/") {
            return PageType.Homepage;
        } else if (pageUrlPath.startsWith("/_blog")) {
            return PageType.BlogPage;
        } else if (pageUrlPath.startsWith("/_about")) {
            return PageType.AboutPage;
        } else if (pageUrlPath.startsWith("/_contact")) {
            return PageType.ContactPage;
        } else {
            return PageType.OtherPage;
        }
    }

    const metaSettings = {
        title: "Your Personal Gateway on the Bitcoin Blockchain",
        description: "",
        image: "",
    };

    $: onHomepage =
        getPageType($page.url.pathname) == PageType.Homepage ? true : false;
</script>

<svelte:head>
    <title>{metaSettings.title}</title>
</svelte:head>

<slot />
