<script lang="ts">
    import { events } from "$lib/data/events";
    import Button from "$lib/components/Button.svelte"

    const monthNames = ['January','Febuary','March','April','May','June','July','August','September','October','November','December'];
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const uniqueCategories = [...new Set(events.map(event => event.category))];

    let today:Date = $state(new Date());
    let month:number = $state(today.getMonth());
    let year:number = $state(today.getFullYear());

    let hiddenPreviousMonth:number[] = $state([]);
    let hiddenNextMonth:number[] = $state([]);
    getHiddenDates();

    let monthLastDay = $derived(new Date(year, month + 1, 0).getDate());
    
    function getHiddenDates() {
        hiddenPreviousMonth = [];
        hiddenNextMonth = [];

        let monthStart = new Date(year, month, 1).getDay();
        let nextMonthLastDate = new Date(year, month + 1, 0).getDate();
        let monthLastDay = new Date(year, month, nextMonthLastDate).getDay();
        let previousMonthLastDate = new Date(year, month, 0).getDate();

        for (let i = monthStart; i > 0; i--) {
            hiddenPreviousMonth.push(previousMonthLastDate - i + 1);
        };

        for (let i = monthLastDay; i < 6; i++) {
            hiddenNextMonth.push(i - monthLastDay + 1);
        };
    }

    function nextMonth() {
        today.setMonth(month + 1);
        month = today.getMonth();
        year = today.getFullYear();
        getHiddenDates()
    }

    function previousMonth() {
        today.setMonth(month - 1);
        month = today.getMonth();
        year = today.getFullYear();
        getHiddenDates()
    }
</script>

<div class="flex flex-col gap-2">
    <p class="text-2xl">{monthNames[month]} {year}</p>
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
        {#each hiddenPreviousMonth as previousDay}
            <div class="col-span-1 h-24 text-zinc-500 px-2 border-r border-b border-zinc-300">
                {previousDay}
            </div>
        {/each}
        {#each { length: monthLastDay }, day}
            <div class="col-span-1 h-24 text-black px-2 border-r border-b border-zinc-300">
                {day + 1}
            </div>
        {/each}
        {#each hiddenNextMonth as nextDay}
            <div class="col-span-1 h-24 text-zinc-500 px-2 border-r border-b border-zinc-300">
                {nextDay}
            </div>
        {/each}
    </div>
    <div class="mt-4 grid grid-cols-3 border-l border-t border-zinc-300">
        {#each uniqueCategories as category}
            <div class="col-span-1 h-24 border-r border-b border-zinc-300">
                <p class="text-xl p-4 text-black">{category}</p>
            </div>
        {/each}
    </div>
</div>