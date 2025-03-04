<script lang="ts">
    import { products, type Product } from "$lib/data/products";
    import ProductCard from "$components/ProductCard.svelte";

    let currency = $state("$");
</script>

<div class="grid grid-cols-2 gap-8">
    {#each products as product}
        <div class="col-span-1">
            <ProductCard product={product} currency={currency} />
        </div>
    {/each}
</div>