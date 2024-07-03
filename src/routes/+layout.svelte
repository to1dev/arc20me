<script>
    import "../app.css";
</script>

<div class="flex flex-col lg:flex-row flex-auto">
    <div class="flex-auto">
        <div class="mx-auto w-full">
            <div class="space-y-5">
                <main class="flex-1 bg-base-100 text-base-content">
                    <slot />
                </main>
            </div>
        </div>
    </div>
</div>
