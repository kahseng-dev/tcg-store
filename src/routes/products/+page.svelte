<script lang="ts">
    import Menu from "$components/Menu.svelte";
    import Search from "$components/products/Search.svelte";
    import Gallery from "$components/products/Gallery.svelte";
    import Footer from "$components/Footer.svelte";

    import { store } from "$lib/data/store";

    let page = $state("Products");
</script>

<svelte:head>
    <title>{page} | {store.name}</title>
</svelte:head>

<Menu title={store.name} />
<div class="grid grid-cols-3 gap-8 mx-24 my-8">
    <Search />
    <div class="col-span-2 flex justify-center">
        <Gallery />
    </div>
</div>
<Footer store={store} />