<script lang="ts">
    let { name, options, showLimit = "0" } = $props();

    let limitedOptions = $state(options);

    if (showLimit != "0") {
        limitedOptions = options.slice(0, showLimit);
    }

    function viewMoreOptions() {
        showLimit = "0";
        limitedOptions = options;
    }
</script>

<div class="flex flex-col font-normal">
    {#each limitedOptions as option}
        <label class="flex gap-2 cursor-pointer">
            <input type="checkbox" name="{name}" value="{option}" />
            {option}
        </label>
    {/each}
</div>
{#if showLimit != "0"}
    <button onclick={viewMoreOptions} class="cursor-pointer font-normal underline text-zinc-500 text-sm">View More</button>
{/if}