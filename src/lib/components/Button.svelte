<script lang="ts">
    let { text = null, icon = null, ...props } = $props();
</script>

<button class="cursor-pointer flex items-center justify-center bg-black rounded text-white px-2 py-2 duration-300 ease-in-out hover:bg-zinc-500" aria-label="{icon}">
    <i class="ph ph-{icon}"></i>
    {#if text}
        <span class="font-bold uppercase">{text}</span>
    {/if}
</button>