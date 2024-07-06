<script lang="ts">
    import { onMount } from "svelte";

    export let image;

    /*let random: number | null = null;

    onMount(async () => {
        random = Math.floor(Math.random() * 30) + 1;
    });*/
</script>

<div class="flex justify-center px-5 -mt-12 bg-white">
    <img
        class="h-32 w-32 bg-white p-2 rounded-full"
        src={image ? image : `/images/loading/animals/24.gif`}
        alt=""
    />
</div>
