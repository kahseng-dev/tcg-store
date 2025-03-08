<script lang="ts">
	import { store } from "$lib/data/store";
	import Menu from "$components/Menu.svelte";
	import Breadcrumb from "$components/Breadcrumb.svelte";
	import Button from "$components/Button.svelte";
	import Footer from "$components/Footer.svelte";

	let { data } = $props();

	let page = $state(data.productDetails.name);
</script>

<svelte:head>
    <title>{page} | {store.name}</title>
</svelte:head>

<Menu title={store.name} />
<div class="flex h-screen">
	<div class="w-1/2 bg-zinc-200 p-4">
		<div class="flex justify-between">
			<Breadcrumb />
			<div class="flex flex-col items-center justify-center">
				<i class="ph ph-heart"></i>
				<span class="text-xs">10</span>
			</div>
		</div>
		<img src={data.productDetails.image} alt={data.productDetails.name}>
	</div>
	<div class="w-1/2 p-12 flex flex-col gap-4">
		<p class="text-4xl">{data.productDetails.name}</p>
		<p class="font-bold text-4xl">{data.productDetails.price}</p>
		<Button text="Add to Cart" />
		<hr class="text-zinc-300" />
		<div>
			<p class="uppercase text-zinc-500 text-xs tracking-widest">Description</p>
			<p>{data.productDetails.text}</p>
		</div>
		<div>
			<p class="uppercase text-zinc-500 text-xs tracking-widest pb-1">Tags</p>
			{#each data.productDetails.tags as tag}
				<p class="bg-zinc-300 inline-flex px-2 rounded text-zinc-500">{data.productDetails.tags}</p>
			{/each}
		</div>
	</div>
</div>
<Footer store={store} />
