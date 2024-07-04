<script lang="ts">
    export let name;
    export let realm;
</script>

<h2 class="text-gray-800 text-3xl font-bold mb-2 min-h-[1rem]">
    <span>{name ? name : ""}</span>
</h2>
<span class="lowercase">+{realm}</span>
