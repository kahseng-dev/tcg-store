<script lang="ts">
    import Menu from "$components/Menu.svelte";
    import Notice from "$components/home/Notice.svelte";
    import ProductShowcase from "$components/home/ProductShowcase.svelte";
    import Collection from "$components/home/Collection.svelte";
    import Stories from "$components/home/Stories.svelte";
    import Carousel from "$components/Carousel.svelte";
    import Footer from "$components/Footer.svelte";

    let store = {
        name: "TCG Store",
        location: "",
        contact: "",
        email: "",
        logo: "",
        products: [],
        timings: [],
        paymentMethods: [],
        isOpen: true,
    };

    let page = $state("Home");
    let notice = $state("Placeholder Text");

</script>

<svelte:head>
    <title>{page} | {store.name}</title>
</svelte:head>

<Menu title={store.name} />
<div>
    <Notice text={notice} />
    <div class="m-8">
        <Carousel items={store.products} />
    </div>
    <ProductShowcase />
    <Collection />
    <div class="mt-8">
        <Stories />
    </div>
</div>
<Footer store={store} />