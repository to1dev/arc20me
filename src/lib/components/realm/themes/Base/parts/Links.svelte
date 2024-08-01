<script lang="ts">
    const backgroundColors = [
        "bg-red-700",
        "bg-blue-500",
        "bg-green-500",
        "bg-yellow-700",
        "bg-green-700",
        "bg-red-900",
        "bg-green-900",
        "bg-blue-700",
        "bg-purple-700",
        "bg-teal-700",
    ];

    interface LinkItem {
        url: string;
        name: string;
        type: string;
    }

    interface LinkGroup {
        group: string;
        items: {
            [key: string]: LinkItem;
        };
    }

    export let links: Record<string, LinkGroup> = {};

    const iconMap: { [key: string]: string } = {
        x: `<svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="w-5 h-5 text-white icon icon-tabler icons-tabler-outline icon-tabler-brand-x"
            ><path
                stroke="none"
                d="M0 0h24v24H0z"
                fill="none"
            /><path
                d="M4 4l11.733 16h4.267l-11.733 -16z"
            /><path
                d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"
            /></svg
        >`,
        github: `<svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="w-5 h-5 text-white icon icon-tabler icons-tabler-outline icon-tabler-brand-github"
            ><path
                stroke="none"
                d="M0 0h24v24H0z"
                fill="none"
            /><path
                d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"
            /></svg
        >`,
        facebook: `<svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="w-5 h-5 text-white icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook"
            ><path
                stroke="none"
                d="M0 0h24v24H0z"
                fill="none"
            /><path
                d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"
            /></svg
        >`,
        official: `<svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="w-5 h-5 text-white icon icon-tabler icons-tabler-outline icon-tabler-rosette-discount-check"
            ><path
                stroke="none"
                d="M0 0h24v24H0z"
                fill="none"
            /><path
                d="M5 7.2a2.2 2.2 0 0 1 2.2 -2.2h1a2.2 2.2 0 0 0 1.55 -.64l.7 -.7a2.2 2.2 0 0 1 3.12 0l.7 .7c.412 .41 .97 .64 1.55 .64h1a2.2 2.2 0 0 1 2.2 2.2v1c0 .58 .23 1.138 .64 1.55l.7 .7a2.2 2.2 0 0 1 0 3.12l-.7 .7a2.2 2.2 0 0 0 -.64 1.55v1a2.2 2.2 0 0 1 -2.2 2.2h-1a2.2 2.2 0 0 0 -1.55 .64l-.7 .7a2.2 2.2 0 0 1 -3.12 0l-.7 -.7a2.2 2.2 0 0 0 -1.55 -.64h-1a2.2 2.2 0 0 1 -2.2 -2.2v-1a2.2 2.2 0 0 0 -.64 -1.55l-.7 -.7a2.2 2.2 0 0 1 0 -3.12l.7 -.7a2.2 2.2 0 0 0 .64 -1.55v-1"
            /><path d="M9 12l2 2l4 -4" /></svg
        >`,
        telegram: `<svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="w-5 h-5 text-white icon icon-tabler icons-tabler-outline icon-tabler-brand-telegram"
            ><path
                stroke="none"
                d="M0 0h24v24H0z"
                fill="none"
            /><path
                d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4"
            /></svg
        >`,
        discord: `<svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="w-5 h-5 text-white icon icon-tabler icons-tabler-outline icon-tabler-brand-discord"
            ><path
                stroke="none"
                d="M0 0h24v24H0z"
                fill="none"
            /><path
                d="M8 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"
            /><path
                d="M14 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"
            /><path
                d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-.972 1.923a11.913 11.913 0 0 0 -4.053 0l-.975 -1.923c-1.5 .16 -3.043 .485 -4.5 1.5c-2 5.667 -2.167 9.833 -1.5 11.5c.667 1.333 2 3 3.5 3c.5 0 2 -2 2 -3"
            /><path d="M7 16.5c3.5 1 6.5 1 10 0" /></svg
        >`,
        nostr: `<svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="w-5 h-5 text-white icon icon-tabler icons-tabler-outline icon-tabler-fingerprint"
            ><path
                stroke="none"
                d="M0 0h24v24H0z"
                fill="none"
            /><path
                d="M18.9 7a8 8 0 0 1 1.1 5v1a6 6 0 0 0 .8 3"
            /><path
                d="M8 11a4 4 0 0 1 8 0v1a10 10 0 0 0 2 6"
            /><path d="M12 11v2a14 14 0 0 0 2.5 8" /><path
                d="M8 15a18 18 0 0 0 1.8 6"
            /><path
                d="M4.9 19a22 22 0 0 1 -.9 -7v-1a8 8 0 0 1 12 -6.95"
            /></svg
        >`,
        instagram: `<svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="w-5 h-5 text-white icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"
            ><path
                stroke="none"
                d="M0 0h24v24H0z"
                fill="none"
            /><path
                d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"
            /><path
                d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"
            /><path d="M16.5 7.5l0 .01" /></svg
        >`,
        threads: `<svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="w-5 h-5 text-white icon icon-tabler icons-tabler-outline icon-tabler-brand-threads"
            ><path
                stroke="none"
                d="M0 0h24v24H0z"
                fill="none"
            /><path
                d="M19 7.5c-1.333 -3 -3.667 -4.5 -7 -4.5c-5 0 -8 2.5 -8 9s3.5 9 8 9s7 -3 7 -5s-1 -5 -7 -5c-2.5 0 -3 1.25 -3 2.5c0 1.5 1 2.5 2.5 2.5c2.5 0 3.5 -1.5 3.5 -5s-2 -4 -3 -4s-1.833 .333 -2.5 1"
            /></svg
        >`,
        youtube: `<svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="w-5 h-5 text-white icon icon-tabler icons-tabler-outline icon-tabler-brand-youtube"
            ><path
                stroke="none"
                d="M0 0h24v24H0z"
                fill="none"
            /><path
                d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z"
            /><path d="M10 9l5 3l-5 3z" /></svg
        >`,
        default: `<svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="w-4 h-4 text-white icon icon-tabler icons-tabler-outline icon-tabler-link"
            ><path
                stroke="none"
                d="M0 0h24v24H0z"
                fill="none"
            /><path d="M9 15l6 -6" /><path
                d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464"
            /><path
                d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463"
            /></svg
        >`,
    };

    function getIcon(type: string): string {
        return iconMap[type] || iconMap.default;
    }
</script>

<div class="flex space-x-4 p-4 break-all justify-center">
    <div
        class="text-info leading-relaxed w-full flex flex-col items-center sm:flex-row sm:flex-wrap sm:justify-center"
    >
        {#each Object.entries(links) as [_, group], i}
            {#each Object.entries(group?.items) as [_, item], index}
                <div
                    class={`w-64 rounded-full overflow-hidden sm:w-auto badge border-none gap-2 mr-1 p-5 ${backgroundColors[index % backgroundColors.length]} m-2`}
                >
                    {@html getIcon(item?.type)}
                    <a
                        class="text-white text-base"
                        href={item?.url}
                        target="_blank">{item?.name}</a
                    >
                </div>
            {/each}
        {/each}
    </div>
</div>
