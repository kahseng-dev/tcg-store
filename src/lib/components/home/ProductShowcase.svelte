<script lang="ts">
    import { products, type Product } from '$lib/data/products';

    let { items } = $props();

    let tabs = $state(items.map((item: string) => item[0]));
    let controllerIndex: number = $state(0);
    let productList = getProducts(items, products);
    let currency = "$";

    function getProducts(items: [], products: Product[]) {
        let result: [string, Product[]][] = [];

        items.map((item: [string, number[]]) => {
            let [tab, ids] = item;
            let productList: Product[] = [];

            ids.map((id: number) => {
                productList.push(products[id]);
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
    <div class="my-12 grid auto-cols-min grid-flow-col grid-col-4 gap-8">
        {#each productList[controllerIndex][1] as product}
            <div class="col-span-1 text-center">
                <img src="{product.image}" alt="{product.name}" class="w-48 h-48 bg-zinc-500 flex items-center"/>
                <p class="mt-4 h-24 w-48 font-bold overflow-hidden line-clamp-3">{product.name}</p>
                <p class="m-2 text-zinc-500">{product.text}</p>
                <p class="m-4">{currency}{product.price}</p>
                <button class="bg-yellow-500 px-8 py-2 rounded">Add to Cart</button>
            </div>
        {/each}
    </div>
</div>

<style>
    .tab-border.active {
        border-bottom-width: 2px;
        border-color: var(--color-black);
    }
</style>