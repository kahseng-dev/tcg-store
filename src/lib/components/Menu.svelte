<script lang="ts">
    import { fade } from "svelte/transition";
    import Link from "$lib/components/Link.svelte";

    let { title } = $props();

    let currentYear = $state(new Date().getFullYear());
    let isActive: boolean | false = $state(false);
    let menuOptions = [
        {
            page: "Home",
            url: "./"
        },
        {
            page: "Products",
            url: "./products"
        },        
        {
            page: "Singles",
            url: "./singles"
        },        
        {
            page: "Events",
            url: ""
        },
    ]
</script>

{#if isActive}
    <div transition:fade class="fixed size-full bg-white/50 z-10 p-8 flex justify-end">
        <div class="bg-black w-[50%] rounded-2xl flex flex-col text-white">
            <button onclick={() => isActive = !isActive} class="cursor-pointer self-end size-8 m-4" aria-label="close-menu">
                <i class="ph ph-x text-base"></i>
            </button>
            <div class="m-8 flex flex-col h-full justify-between gap-8">
                <div class="flex flex-col gap-4 text-4xl font-semibold">
                    {#each menuOptions as option}
                        <Link url={option.url} text={option.page} color="white"/>
                    {/each}
                </div>
                <div class="flex flex-col gap-4 text-zinc-500">
                    <hr />
                    <div class="flex items-center gap-4">
                        <p>Policy</p>
                        <p>Terms</p>
                        <p class="text-right text-xs w-full">© {title} {currentYear}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
{/if}

<div class="p-8 flex justify-between">
    <a href="../" class="text-2xl font-bold">{title}</a>
    <button onclick={() => isActive = !isActive} class="cursor-pointer rounded-full flex items-center px-4 pb-0.5 border-2 border-black hover:bg-black hover:text-white">
        <span>menu</span>
        <i class="pl-1 ph ph-plus text-base"></i>
    </button>
</div>
