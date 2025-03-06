<script lang="ts">
    let { options } = $props();

    let isDropdownActive:boolean = $state(false);
    let selectedOption = $state(options[0]);

    function handleDropdownClick() {
        isDropdownActive = !isDropdownActive;
    }

    function handleOptionClick(option:any) {
        selectedOption = option;
        isDropdownActive = false;
    }
</script>

<button onclick={handleDropdownClick} class="relative w-full flex justify-between items-center font-normal rounded outline-2 outline-zinc-300 px-2 py-1.5">
    <span>{selectedOption}</span>
    <i class="ph-bold ph-caret-down transition duration-300 {isDropdownActive ? "active" : ""}"></i>
</button>
{#if isDropdownActive}
    <div class="absolute flex flex-col min-w-64 bg-white mt-2 font-normal rounded outline-2 outline-zinc-300 px-2 py-1.5">
        {#each options as option}
            <button onclick={() => handleOptionClick(option)} class="w-full rounded text-left px-2 hover:bg-zinc-200">{option}</button>
        {/each}
    </div>
{/if}

<style>
    .ph-caret-down.active {
        rotate: 180deg;
    }
</style>