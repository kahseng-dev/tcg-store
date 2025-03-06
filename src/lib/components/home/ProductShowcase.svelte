<script lang="ts">
    import ProductCard from "$components/ProductCard.svelte";

    import { products, type Product } from "$lib/data/products";

    let { items } = $props();

    let tabs = $state(items.map((item: string) => item[0]));
    let controllerIndex: number = $state(0);
    let productList = getProducts(items, products);

    function getProducts(items: [], products: Product[]) {
        let result: [string, Product[]][] = [];

        items.map((item: [string, number[]]) => {
            let [tab, ids] = item;
            let productList: Product[] = [];

            ids.map((id: number) => {
                products.map((product: Product) => {
                    if (product.id === id) {
                        productList.push(product);
                    }
                });
            });

            result.push([tab, productList]);
        });

        return result;
    }

    function isTabActive(controllerIndex: number, index: number) {
        return controllerIndex === index;
    }

    function setTabActive(index: number) {
        controllerIndex = index;
    }
</script>

<div class="flex flex-col items-center">
    <div class="flex gap-4 border-b border-zinc-300">
        {#each tabs as tab, index}
            <button onclick={() => setTabActive(index)} class="duration-300 transition cursor-pointer uppercase text-xs tracking-widest font-semibold text-zinc-500 tab-border {isTabActive(controllerIndex, index) ? "active" : ""}">{tab}</button>
        {/each}
    </div>
    <div class="my-12 mx-8 flex gap-8">
        {#each productList[controllerIndex][1] as product}
            <ProductCard product={product} />
        {/each}
    </div>
</div>

<style>
    .tab-border.active {
        border-bottom-width: 2px;
        border-color: var(--color-black);
    }
</style>