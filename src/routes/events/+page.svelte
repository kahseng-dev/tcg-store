<script lang="ts">
	import { store } from "$lib/data/store";
	import Menu from "$components/Menu.svelte";
    import Calendar from "$components/events/Calendar.svelte";
	import Footer from "$components/Footer.svelte";

	let page = $state("Events");
</script>

<svelte:head>
    <title>{page} | {store.name}</title>
</svelte:head>

<Menu title={store.name} />
<div class="m-8">
    <p class="text-4xl font-semibold">Event Schedule</p>
    <p class="pb-4"></p>
    <Calendar />
</div>
<Footer store={store} />
