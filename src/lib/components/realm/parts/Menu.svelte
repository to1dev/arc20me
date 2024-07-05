<script lang="ts">
    function closeMenu(): void {
        const elem = document.activeElement as HTMLElement;
        if (elem) {
            elem.blur();
        }
    }
</script>

<div class="dropdown dropdown-end absolute top-2 right-2 p-1">
    <div
        tabindex="-1"
        role="button"
        class="btn btn-ghost btn-circle btn-sm bg-neutral-700 hover:bg-neutral p-1"
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icon icon-tabler icons-tabler-outline icon-tabler-dots"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
            <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
            <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
        </svg>
    </div>
    <ul
        tabindex="-1"
        class="menu dropdown-content bg-neutral rounded-box z-[1] w-52 p-2 shadow-xl"
    >
        <li>
            <a href="/"
                ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="w-4 h-4 icon icon-tabler icons-tabler-outline icon-tabler-home"
                    ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
                        d="M5 12l-2 0l9 -9l9 9l-2 0"
                    /><path
                        d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"
                    /><path
                        d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"
                    /></svg
                >Home</a
            >
        </li>
        <li>
            <button on:click={closeMenu}
                ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="w-4 h-4 icon icon-tabler icons-tabler-outline icon-tabler-wallet"
                    ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
                        d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12"
                    /><path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" /></svg
                >Wallet</button
            >
        </li>
        <li>
            <button on:click={closeMenu}
                ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="w-4 h-4 icon icon-tabler icons-tabler-outline icon-tabler-paint"
                    ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
                        d="M5 3m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z"
                    /><path
                        d="M19 6h1a2 2 0 0 1 2 2a5 5 0 0 1 -5 5l-5 0v2"
                    /><path
                        d="M10 15m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"
                    /></svg
                >Mint</button
            >
        </li>
        <li>
            <button on:click={closeMenu}
                ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="w-4 h-4 icon icon-tabler icons-tabler-outline icon-tabler-share"
                    ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
                        d="M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"
                    /><path d="M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path
                        d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"
                    /><path d="M8.7 10.7l6.6 -3.4" /><path
                        d="M8.7 13.3l6.6 3.4"
                    /></svg
                >Share</button
            >
        </li>
    </ul>
</div>
