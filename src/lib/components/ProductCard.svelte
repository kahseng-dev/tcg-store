<script lang="ts">
    let { product, currency } = $props();
</script>

<div class="flex flex-col gap-2 w-56">
    <img class="h-48 bg-zinc-500 flex items-center text-center" src={product.image} alt={product.name} />
    <p class="h-12 font-bold overflow-hidden line-clamp-2">{product.name}</p>
    <p class="text-zinc-500 text-sm line-clamp-2">{product.text}</p>
    <p class="font-bold text-2xl">{currency}{product.price}</p>
    <button class="bg-black py-2 rounded font-bold text-white uppercase">Add to Cart</button>
</div>