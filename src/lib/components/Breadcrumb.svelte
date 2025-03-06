<script lang="ts">
    import { page } from '$app/state';

    let urls: string[]

    urls = page.route.id?.split("/") || []
    urls.shift();
</script>

<p class="uppercase text-xs text-zinc-500 tracking-wide">
    <a class="font-mono hover:underline" href="./">Home</a>
    {#each urls as url}
        <span class="font-mono font-normal">/</span>
        {#if urls.at(-1) == url}
            <span class="font-mono text-black">{url}</span>
            {:else}
            <span class="font-mono">{url}</span>
        {/if}
    {/each}
</p>