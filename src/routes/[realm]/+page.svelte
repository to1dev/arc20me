<script lang="ts">
    import { dev } from "$app/environment";

    export let data;
    let { ThemeComponent, realm, result2, meta, profile, realmData } = data;

    let background = meta?.background;
    let vars = `--background-image: url("${background || "/images/background.svg"}")`;
</script>

<div
    class="flex flex-col lg:flex-row flex-auto min-h-screen bg-white bg-fixed bg-cover background"
    style={vars}
>
    <div class="flex-auto">
        <div class="mx-auto w-full">
            <div class="space-y-5">
                <main class="flex-1 text-base-content">
                    <div class="text-lg dynamic">
                        {#if ThemeComponent}
                            <svelte:component
                                this={ThemeComponent}
                                {realm}
                                debug={dev}
                                {realmData}
                                {meta}
                                {profile}
                            />
                        {/if}
                    </div>
                </main>
            </div>
        </div>
    </div>
</div>

<style>
    .background {
        background-image: var(--background-image);
    }

    @media (max-width: 640px) {
        .background {
            background-image: none;
        }
    }
</style>
