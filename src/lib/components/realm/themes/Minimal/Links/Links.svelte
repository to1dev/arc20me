<script lang="ts">
    import { page } from "$app/stores";
    import Copy from "./Copy.svelte";
    import X from "./X.svelte";

    const url: string = `https://arc20.me${$page.url.pathname}`;
</script>

<div>
    <ul class="menu rounded-box text-4xl">
        <li><X {url} text="" /></li>
        <li><Copy {url} /></li>
    </ul>
</div>
