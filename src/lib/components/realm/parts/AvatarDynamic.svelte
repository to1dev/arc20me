<script lang="ts">
    export let isLoading;
    export let image;
</script>

<img
    class="h-32 w-32 bg-white p-2 rounded-full"
    src={image
        ? image
        : isLoading
          ? "/images/loading/animals/24.gif"
          : "/images/loading/animals/s/24.svg"}
    alt=""
/>
