<script lang="ts">
    let { 
        text = undefined, 
        icon = undefined, 
        color = undefined, 
        class:className = ` text-${color}`,
        ...rest
    } = $props();

    if (color == undefined) {
        className += " text-white"
    }
</script>

<button class="cursor-pointer flex items-center justify-center rounded px-2 py-2 duration-300 ease-in-out bg-black hover:bg-black/50 {className}" aria-label="{icon}" {...rest}>
    {#if icon}
        <i class="ph ph-{icon}"></i>
    {/if}
    {#if text}
        <span class="font-bold uppercase">{text}</span>
    {/if}
</button>