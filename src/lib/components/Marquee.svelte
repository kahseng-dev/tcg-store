<script lang="ts">
    let { text } = $props();
    
    let repeat = 10;
</script>

<div class="relative flex overflow-hidden w-full bg-zinc-200">
    <div class="animate-marquee flex justify-around items-center min-w-full">
        <p class="text-2xl whitespace-nowrap flex items-center gap-4">
            {#each { length: repeat }}
                {text}
                <i class="ph ph-asterisk"></i>
            {/each}
        </p>
        <p class="pl-4 text-2xl whitespace-nowrap flex items-center gap-4">
            {#each { length: repeat }}
                {text}
                <i class="ph ph-asterisk"></i>
            {/each}
        </p>
    </div>
</div>

<style>
    @keyframes scroll {
        from { transform: translateX(0%); }
        to { transform: translateX(-100%); }
    }

    .animate-marquee {
        animation: scroll 25s linear infinite;
    }
</style>