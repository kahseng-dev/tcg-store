<script lang="ts">
    import Link from "$lib/components/Link.svelte";
    import Button from "$lib/components/Button.svelte";
    import Price from "$lib/components/Price.svelte";

    let { product } = $props();
</script>

<div class="flex flex-col gap-2 w-56">
    <img class="h-48 bg-zinc-500 flex items-center text-center" src={product.image} alt={product.name} />
    <Link url="products/{product.id}" text={product.name} color="black" />
    <p class="text-zinc-500 text-sm line-clamp-2">{product.text}</p>
    <Price price={product.price} />
    <Button text="Add to Cart" />
</div>