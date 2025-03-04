<script lang="ts">
    import { products, type Product } from "$lib/data/products";

    let currency = $state("$");
</script>

<div class="grid grid-cols-2 gap-8">
    {#each products as product}
        <div class="col-span-1 w-48">
            <img class="h-48 bg-zinc-500 flex items-center text-center" src={product.image} alt={product.name} />
            <div class="mt-2 flex flex-col gap-2">
                <p class="w-48 font-bold overflow-hidden line-clamp-2">{product.name}</p>
                <p class="text-zinc-500 text-sm">{product.text}</p>
                <p class="font-bold text-2xl">{currency}{product.price}</p>
                <button class="bg-black py-2 rounded font-bold text-white uppercase">Add to Cart</button>
            </div>
        </div>
    {/each}
</div>