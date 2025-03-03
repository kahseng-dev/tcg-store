<script lang="ts">
    let { items } = $props();

    let controllerIndex: number = $state(0);
    let hasItems: boolean = $state(items.length > 0);

    export function isDotActive(controllerIndex:number, index:number) {
        return controllerIndex === index;
    }

    export function nextIndex() {
        controllerIndex = controllerIndex === items.length - 1 ? 0 : controllerIndex + 1;
    }

    export function previousIndex() {
        controllerIndex = controllerIndex === 0 ? items.length - 1 : controllerIndex - 1;
    }
</script>

<div class="flex flex-col items-center">
    <div class="flex items-center w-full">
        {#if hasItems}
        <button onclick={previousIndex} class="cursor-pointer p-4 bg-zinc-400 rounded-l-xl" aria-label="carousel-left">
            <i class="flex ph ph-arrow-left text-2xl text-white"></i>
        </button>
        {/if}
        <div class="bg-zinc-500 w-full h-84 rounded-2xl transition">
            <img src="{items[controllerIndex].imageURL}" alt="{items[controllerIndex].alt}" class="object-cover size-full text-white rounded-2xl" />
        </div>
        {#if hasItems}
        <button onclick={nextIndex} class="cursor-pointer p-4 bg-zinc-400 rounded-r-xl" aria-label="carousel-right">
            <i class="flex ph ph-arrow-right text-2xl text-white"></i>
        </button>
        {/if}
    </div>
    <div class="mt-2">
        {#each {length: items.length} as _, index}
            <i class="ph-fill ph-dot-outline text-zinc-300 text-2xl {isDotActive(controllerIndex, index) ? "active" : ""}"></i>
        {/each}
    </div>
</div>

<style>
    .ph-dot-outline.active {
        color: var(--color-zinc-800);
    }
</style>