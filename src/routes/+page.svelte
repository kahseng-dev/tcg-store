<script lang="ts">
    import Menu from "$components/Menu.svelte";
    import Navbar from "$components/home/Navbar.svelte";
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

</script>

<svelte:head>
    <title>{page} | {store.name}</title>
</svelte:head>

<Menu title={store.name} />
<div>
    <Navbar />
    <div class="m-8">
        <Carousel items={store.products} />
    </div>
</div>
<Footer store={store} />