<script lang="ts">
    import Menu from "$components/Menu.svelte";
    import Marquee from "$components/Marquee.svelte";
    import ProductShowcase from "$components/home/ProductShowcase.svelte";
    import Collection from "$components/home/Collection.svelte";
    import Stories from "$components/home/Stories.svelte";
    import Carousel from "$components/Carousel.svelte";
    import Footer from "$components/Footer.svelte";

    import { store } from '$lib/data/store';
    import { products } from '$lib/data/products';

    let page = $state("Home");
    let notice = $state("Placeholder Text");
</script>

<svelte:head>
    <title>{page} | {store.name}</title>
</svelte:head>


<Menu title={store.name} />
<Marquee text={notice} />
<div class="m-8">
    <Carousel items={products} />
</div>
<ProductShowcase />
<Collection />
<div class="mt-8">
    <Stories />
</div>
<Footer store={store} />