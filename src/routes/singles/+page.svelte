<script lang="ts">
	import { store } from "$lib/data/store";
    import { products } from "$lib/data/products";
	import Menu from "$components/Menu.svelte";
    import Price from "$components/Price.svelte";
    import Button from "$components/Button.svelte";
	import Footer from "$components/Footer.svelte";

	let page = $state("Singles");
    let singles = getSingles();

    function getSingles() {
        return products
    };
</script>

<svelte:head>
    <title>{page} | {store.name}</title>
</svelte:head>

<Menu title={store.name} />
<div class="grid grid-cols-3">
    {#each singles as single}
        <div class="border-t border-r border-zinc-300">
            <img class="h-64 bg-zinc-100 flex items-center text-center" src={single.image} alt={single.name} />
            <div class="flex flex-col gap-4 m-4 justify-between">
                <p class="text-xl line-clamp-2">{single.name}</p>
                <Price price={single.price}/>
                <Button text="Add to Cart"/>
            </div>
        </div>
    {/each}
</div>
<Footer store={store} />
