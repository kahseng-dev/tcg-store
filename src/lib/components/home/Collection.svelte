<script lang="ts">
    let { items } = $props();
</script>

<div class="flex flex-col items-center">
    <p class="font-bold text-2xl">Collection</p>
    <div class="mt-8 px-24 w-full grid grid-flow-col grid-cols-2 grid-rows-2 text-white text-xl font-bold gap-8">
        {#each items as item}
            <div class="h-48 bg-zinc-500 flex items-center justify-center">
                <p>{item}</p>
            </div>
        {/each}
    </div>
</div>