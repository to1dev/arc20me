<script lang="ts">
    export let banner;

    //const c1 = "h-48 overflow-hidden flex items-center justify-center";
    //const c2 = "w-full h-auto object-cover";
</script>

<div class="h-32 sm:h-48 overflow-hidden">
    <img class="w-full" src={banner ? banner : "/images/banner.jpg"} alt="" />
</div>
