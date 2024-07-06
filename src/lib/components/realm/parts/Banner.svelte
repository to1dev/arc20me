<script lang="ts">
    export let banner;
</script>

<div class="h-48 overflow-hidden rounded-t-xl">
    <img class="w-full" src={banner ? banner : "/images/banner.jpg"} alt="" />
</div>
