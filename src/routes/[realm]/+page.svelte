<script lang="ts">
    import { dev } from "$app/environment";

    export let data;
    let { ThemeComponent, realm, meta, profile, realmData } = data;
</script>

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
