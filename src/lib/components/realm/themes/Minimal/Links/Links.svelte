<script lang="ts">
    import { page } from "$app/stores";
    import Copy from "./Copy.svelte";
    import X from "./X.svelte";
    import Email from "./Email.svelte";
    import Facebook from "./Facebook.svelte";
    import LinkedIn from "./LinkedIn.svelte";

    const url: string = `https://arc20.me${$page.url.pathname}`;
</script>

<div>
    <ul class="menu rounded-box text-4xl">
        <li><X {url} text="" /></li>
        <li><Email {url} subject="" /></li>
        <li><Facebook {url} quote="" /></li>
        <li><LinkedIn {url} /></li>
        <li><Copy {url} /></li>
    </ul>
</div>
