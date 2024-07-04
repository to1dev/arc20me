<script lang="ts">
    import { onMount } from "svelte";

    export let image;
</script>

<img
    class="h-32 w-32 bg-white p-2 rounded-full"
    src={image ? image : `/images/loading/animals/24.gif`}
    alt=""
/>
