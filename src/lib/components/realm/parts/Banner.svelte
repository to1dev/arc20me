<script lang="ts">
    import { afterUpdate } from "svelte";

    export let banner;
    export let bannerData;

    let fallbackBanner = "/images/banner.jpg";
    function handleImageError(event: Event) {
        const target = event.target as HTMLImageElement;
        target.src = fallbackBanner;
    }

    let bannerSrc: string | null = null;

    afterUpdate(async () => {
        if (bannerData) {
            bannerSrc = bannerData;
        } else {
            bannerSrc = banner;
        }
    });

    //const c1 = "h-48 overflow-hidden flex items-center justify-center";
    //const c2 = "w-full h-auto object-cover";
</script>

<div class="h-32 sm:h-48 overflow-hidden">
    <img
        class="w-full"
        src={bannerSrc ? bannerSrc : fallbackBanner}
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
