<script lang="ts">
    import Navbar from "$components/Navbar.svelte";
    import Carousel from "$components/Carousel.svelte";

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

<Navbar title={store.name} />
<div class="m-8">
    <Carousel items={store.products} />
</div>