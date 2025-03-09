<script lang="ts">
    import { events, type Event } from "$lib/data/events";
    import Button from "$lib/components/Button.svelte"

    let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    let numberOfDaysDisplayed = 35;
    let today: Date = $state(new Date());
    let month = $state(today.toLocaleString("default", { month: "long" }));
    let year = $state(today.getFullYear().toString());

    function nextMonth() {
        today.setMonth(today.getMonth() + 1);
        month = today.toLocaleString("default", { month: "long" });
        year = today.getFullYear().toString();
    }

    function previousMonth() {
        today.setMonth(today.getMonth() - 1);
        month = today.toLocaleString("default", { month: "long" });
        year = today.getFullYear().toString();
    }
</script>

<div class="flex flex-col gap-2">
    <p class="text-2xl">{month} {year}</p>
    <div class="flex gap-2">
        <Button onclick={previousMonth} icon="arrow-left" class="w-min bg-transparent text-base hover:text-white" color="black"/>
        <Button onclick={nextMonth} icon="arrow-right" class="w-min bg-transparent text-base hover:text-white" color="black"/>
    </div>
    <div class="grid grid-cols-{days.length}">
        {#each days as day}
            <span class="col-span-1 text-zinc-500">{day}</span>
        {/each}
    </div>
    <div class="grid grid-cols-{days.length} border-l border-t border-zinc-300">
        {#each { length: numberOfDaysDisplayed }, day}
            <div class="col-span-1 h-24 text-black px-2 border-r border-b border-zinc-300">{day + 1}</div>
        {/each}
    </div>
</div>