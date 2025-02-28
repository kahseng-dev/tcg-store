<script lang="ts">
    import Menu from "$components/Menu.svelte";
    import Announcement from "$components/home/Announcement.svelte";
    import Stories from "$components/home/Stores.svelte";
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
    let announcement = $state("Placeholder Text");

</script>

<svelte:head>
    <title>{page} | {store.name}</title>
</svelte:head>

<Menu title={store.name} />
<div>
    <Announcement text={announcement} />
    <div class="m-8">
        <Carousel items={store.products} />
    </div>
    <Stories />
</div>
<Footer store={store} />