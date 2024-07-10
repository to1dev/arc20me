<script lang="ts">
    export let banner;
</script>

<div class="h-48 overflow-hidden flex items-center justify-center">
    <img class="w-full h-auto object-cover" src={banner ? banner : "/images/banner.jpg"} alt="" />
</div>
