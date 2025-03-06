<script lang="ts">
    import Button from "$lib/components/Button.svelte";
    import DropdownMenu from "$lib/components/DropdownMenu.svelte";
    import RadioGroup from "$lib/components/RadioGroup.svelte";

    import { products, type Product } from "$lib/data/products";

    let searchedProducts: Product[] = [];
    let userQuery = "";
    let filterOptions = {
        sort: ["Recently Added", "Lowest Price", "Highest Price", "Best Value"],
        tags: ["All", "Pokemon TCG", "Yu Gi Oh", "One Piece TCG"],
        collections: ["Pokemon (English)", "Pokemon (Japanese)", "Yu Gi Oh", "One Piece TCG", "Basketball", "Football", "Comics", "Baseball"],
        authenticators: ["CGC", "PSA", "BGS", "SGC", "BVG", "MBA", "WATA"],
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
        <DropdownMenu options={filterOptions.sort} />
    </div>
    <div class="border-t border-zinc-300 font-normal">
        <p class="py-2 font-bold">Tags</p>
        <RadioGroup name="sort" options={filterOptions.tags} />
    </div>
    <div class="border-t border-zinc-300">
        <p class="py-2">Collections</p>
        <RadioGroup name="collections" options={filterOptions.collections} />
    </div>
    <div class="border-t border-zinc-300">
        <p class="py-2">Authenticators</p>
        <RadioGroup name="authenticators" options={filterOptions.authenticators} />
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