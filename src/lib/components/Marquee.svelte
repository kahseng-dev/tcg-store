<script lang="ts">
    let { text } = $props();
</script>

<div class="relative flex overflow-hidden w-full bg-zinc-200">
    <div class="animate-marquee flex justify-around items-center min-w-full">
        <p class="text-2xl whitespace-nowrap">{(text + " ").repeat(10)}</p>
    </div>
</div>

<style>
    @keyframes scroll {
        from {
		transform: translateX( 0% );
	} to {
		transform: translateX( -100% );
	}
    }

    .animate-marquee {
        animation: scroll 10s linear infinite;
    }
</style>