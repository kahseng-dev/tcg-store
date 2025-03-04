<script lang="ts">
    import Menu from "$components/Menu.svelte";
    import Gallery from "$components/products/Gallery.svelte";
    import Footer from "$components/Footer.svelte";

    import { store } from "$lib/data/store";

    let page = $state("Products");
</script>

<svelte:head>
    <title>{page} | {store.name}</title>
</svelte:head>

<Menu title={store.name} />
<div class="grid grid-cols-2 gap-8">
    <Gallery />
</div>
<Footer store={store} />