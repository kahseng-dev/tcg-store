<script lang="ts">
    import Menu from "$components/Menu.svelte";
    import Marquee from "$components/Marquee.svelte";
    import ProductShowcase from "$components/home/ProductShowcase.svelte";
    import Collection from "$components/home/Collection.svelte";
    import Stories from "$components/home/Stories.svelte";
    import Carousel from "$components/Carousel.svelte";
    import Footer from "$components/Footer.svelte";

    import { store } from '$lib/data/store';

    let page = $state("Home");
    let notice = $state("Placeholder Text");
    let carouselItems = $state([
        {
            imageURL: "/home/carousel/item-1.webp",
            alt: "Placeholder Image 1"
        },
        {
            imageURL: "/home/carousel/item-2.webp",
            alt: "Placeholder Image 2"
        },
        {
            imageURL: "/home/carousel/item-3.webp",
            alt: "Placeholder Image 3"
        }
    ]);
    let productShowcaseItems = $state([
        ["Best Sellers", [1, 2, 3, 4]],
        ["New Arrivals", [5, 6, 7]]
    ]);
    let collections = $state([
        "Pokemon TCG", 
        "Yu-Gi-Oh", 
        "Magic: The Gathering", 
        "One Piece TCG"
    ]);
</script>

<svelte:head>
    <title>{page} | {store.name}</title>
</svelte:head>


<Menu title={store.name} />
<Marquee text={notice} />
<div class="m-8">
    <Carousel items={carouselItems} />
</div>
<ProductShowcase items={productShowcaseItems} />
<Collection items={collections} />
<div class="mt-8">
    <Stories />
</div>
<Footer store={store} />