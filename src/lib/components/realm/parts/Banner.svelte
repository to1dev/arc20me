<script lang="ts">
    import { onMount, afterUpdate } from "svelte";

    export let banner;
    export let bannerData;

    let fallbackBanner = "/images/banner.jpg";
    function handleImageError(event: Event) {
        const target = event.target as HTMLImageElement;
        target.src = fallbackBanner;
    }

    let bannerSrc: string | null = null;

    onMount(async () => {
        if (bannerData) {
            bannerSrc = bannerData;
        } else {
            bannerSrc = banner;
        }
    });
</script>

<div class="h-32 sm:h-48 overflow-hidden">
    <img
        class="w-full h-full object-cover"
        src={banner ? banner : fallbackBanner}
        alt=""
        on:error={handleImageError}
    />
    <!--div class="absolute left-14 top-3 m-2 indicator">
        <span
            class="indicator-item badge badge-primary rounded-full border-none"
            >0.0.1-alpha.1</span
        >
    </div-->
</div>
