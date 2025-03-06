<script lang="ts">
    import { products, type Product } from "$lib/data/products";
    import Button from "$lib/components/Button.svelte";

    let searchedProducts: Product[] = [];
    let userQuery = "";
    let filterOptions = {
        sort: ["Recently Added", "Lowest Price", "Highest Price", "Best Value"],
        tags: ["All"],
        collections: [""],
        authenticators: [""],
        price: {
            from: 0,
            to: 0
        }
    };

    searchProducts(userQuery);

    function searchProducts(query: string) {
        if (query === "") {
            return searchedProducts = products;
        }

        searchedProducts = products.filter((product) => {
            return product.name.toLowerCase().includes(query.toLowerCase());
        });
    }
</script>

<div class="font-bold flex flex-col gap-4">
    <p class="uppercase text-xs text-zinc-500 tracking-wide">
        <a class="font-mono hover:underline" href="./">Home</a> / 
        <span class="font-mono text-black">Products</span>
    </p>
    <span>{searchedProducts.length} Results</span>
    <div class="border-t border-zinc-300">
        <p class="py-2">Search</p>
        <div class="grid grid-cols-5 gap-2">
            <input class="col-span-4 font-normal rounded outline-2 outline-zinc-300 px-2 py-1" placeholder="Pokemon Booster Pack..." />
            <Button icon="magnifying-glass" />
        </div>
    </div>
    <div class="border-t border-zinc-300">
        <p class="py-2">Sort</p>
        <select class="font-normal rounded outline-2 outline-zinc-300 px-2 py-1">
            {#each filterOptions.sort as option}
                <option>{option}</option>
            {/each}
        </select>
    </div>
    <div class="border-t border-zinc-300 font-normal">
        <p class="py-2 font-bold">Tags</p>
        {#each filterOptions.tags as tag}
            <div>
                <input type="radio" id="{tag}" name="{tag}" value="{tag}" />
                <label for="{tag}">{tag}</label>
            </div>
        {/each}
        <p class="text-zinc-500 underline font-normal text-sm">See More</p>
    </div>
    <div class="border-t border-zinc-300">
        <p class="py-2">Collections</p>
        {#each filterOptions.collections as collection}
            <div>{collection}</div>
        {/each}
    </div>
    <div class="border-t border-zinc-300">
        <p class="py-2">Authenticator</p>
        {#each filterOptions.authenticators as authenticator}
            <div>{authenticator}</div>
        {/each}
    </div>
    <div class="border-t border-zinc-300">
        <p class="py-2">Price</p>
        <div class="flex flex-col gap-2">
            <div class="grid grid-cols-5 gap-2">
                <span class="col-span-2 text-sm font-normal text-zinc-500">From: </span>
                <span class="col-span-2 text-sm font-normal text-zinc-500">To: </span>
            </div>
            <div class="grid grid-cols-5 gap-2">
                <input class="col-span-2 font-normal rounded outline-2 outline-zinc-300 px-2 py-1" placeholder="Enter Min" />
                <input class="col-span-2 font-normal rounded outline-2 outline-zinc-300 px-2 py-1" placeholder="Enter Max" />
                <Button icon="arrow-circle-right" />
            </div>
        </div>
    </div>
</div>