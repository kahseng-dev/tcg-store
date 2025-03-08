<script lang="ts">
    import { page } from '$app/state';

    let urls: string[]

    urls = page.url.pathname.split("/").slice(1);
</script>

<div class="flex font-normal uppercase text-xs text-zinc-500 tracking-wide gap-1">
    <a class="font-mono hover:underline" href="./">Home</a>
    {#each urls as url}
        <span class="font-mono">/</span>
        {#if urls.at(-1) != url}
            <a class="font-mono hover:underline" href="./" aria-label="{url}">{url}</a>
            {:else}
            <span class="font-mono text-black">{url}</span>
        {/if}
    {/each}
</div>