<script lang="ts">
    let { name, options, showLimit = "0" } = $props();

    let filteredOptions = $state(options);
    let isChecked = $state(options[0]);

    if (showLimit != "0") {
        filteredOptions = options.slice(0, showLimit);
    }

    function handleOptionClick(option:any) {
        isChecked = option;
    }
</script>

<div class="flex flex-col font-normal">
    {#each filteredOptions as option}
        <label class="flex gap-2 cursor-pointer">
            <input onclick={() => handleOptionClick(option)} type="radio" name="{name}" value="{option}" checked={isChecked === option} />
            {option}
        </label>
    {/each}
</div>
{#if showLimit != "0"}
    <button class="cursor-pointer font-normal underline text-zinc-500 text-sm">View More</button>
{/if}