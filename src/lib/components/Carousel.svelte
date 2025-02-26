<script lang="ts">
    let { items } = $props();
</script>

<div class="flex flex-col items-center">
    <div class="flex items-center w-full">
        <button class="p-4 bg-zinc-400 rounded-l-xl" aria-label="carousel-left">
            <i class="flex ph ph-arrow-left text-2xl text-white"></i>
        </button>
        <div class="bg-zinc-500 w-full h-84 rounded-2xl"></div>
        <button class="p-4 bg-zinc-400 rounded-r-xl" aria-label="carousel-right">
            <i class="flex ph ph-arrow-right text-2xl text-white"></i>
        </button>
    </div>
    <ul class="list-disc">
        <li class="text-zinc-500"></li>
    </ul>
</div>