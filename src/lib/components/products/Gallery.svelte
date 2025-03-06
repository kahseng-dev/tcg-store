<script lang="ts">
    import { products } from "$lib/data/products";
    import ProductCard from "$components/ProductCard.svelte";
</script>

<div class="grid grid-cols-2 gap-8">
    {#each products as product}
        <div class="col-span-1">
            <ProductCard product={product} />
        </div>
    {/each}
</div>