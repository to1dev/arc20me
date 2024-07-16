<script lang="ts">
    import { page } from "$app/stores";
    import { onMount, onDestroy } from "svelte";
    import { debug } from "$lib/stores/Core";
    import { isDk } from "$lib/stores/Realm";
    import punycode from "punycode/";

    import Base from "$lib/components/realm/themes/Base.svelte";

    $: realm = punycode.toASCII($page.params.realm).trim().toLowerCase();

    let _debug = false;

    const unsubscribe = debug.subscribe((value) => {
        _debug = value;
    });

    onDestroy(() => {
        unsubscribe();
    });

    let error: string | null = null;
    let isLoading: boolean = false;
    let realmData: any | null = null;
    let meta: any | null = null;
    let profile: any | null = null;

    onMount(async () => {
        try {
            isLoading = true;

            const data: any = await fetch(
                `https://ep2.to1.dev/api/realm/${realm}`
            );
            const result = await data.json();

            //const result: any = await fetchResult(realm);
            meta = result?.meta;
            profile = result?.profile;

            let v = meta?.v ?? "1.2.0";
            isDk.set(v.endsWith("dk"));
            error = null;
        } catch (e) {
            error = (e as Error).message;
        } finally {
            realmData = { realm: realm };
            isLoading = false;
        }
    });
</script>

<div class="text-lg">
    <Base isDk={$isDk} {realm} debug={_debug} {realmData} {meta} {profile} />
</div>
