<script lang="ts">
    import { products, type Product } from "$lib/data/products";
    import Breadcrumb from "$components/Breadcrumb.svelte";
    import Button from "$lib/components/Button.svelte";
    import DropdownMenu from "$lib/components/DropdownMenu.svelte";
    import RadioGroup from "$lib/components/RadioGroup.svelte";
    import CheckboxGroup from "$components/CheckboxGroup.svelte";

    let searchResults: Product[] = [];

    let selectOptions = {
        sort: ["Recently Added", "Lowest Price", "Highest Price", "Best Value"],
        tags: ["All", "Pokemon TCG", "Yu Gi Oh", "One Piece TCG"],
        collections: ["Pokemon (English)", "Pokemon (Japanese)", "Yu Gi Oh", "One Piece TCG", "Basketball", "Football", "Comics", "Baseball"],
        authenticators: ["CGC", "PSA", "BGS", "SGC", "BVG", "MBA", "WATA"]
    };

    let search = "";
    let sort = selectOptions.sort[0];
    let tags = selectOptions.tags[0];
    let collections = selectOptions.collections[0];
    let authenticators = selectOptions.authenticators[0];
    let price = { to: 0, from: 0 };
</script>

<div class="font-bold flex flex-col gap-2">
    <Breadcrumb />
    <span class="py-2">{searchResults.length} Results</span>
    <hr class="border-zinc-300"/>
    <div class="flex flex-col gap-2 py-2">
        <span class="leading-none">Search</span>
        <div class="grid grid-cols-5 gap-2">
            <input bind:value={search} class="col-span-4 font-normal rounded outline-2 outline-zinc-300 px-2 py-1" placeholder="Pokemon Booster Pack..." />
            <Button icon="magnifying-glass" />
        </div>
    </div>
    <hr class="border-zinc-300"/>
    <div class="flex flex-col gap-2 py-2">
        <span class="leading-none">Sort</span>
        <DropdownMenu options={selectOptions.sort} />
    </div>
    <hr class="border-zinc-300"/>
    <div class="flex flex-col gap-2 py-2">
        <span class="leading-none">Tags</span>
        <RadioGroup name="sort" options={selectOptions.tags} />
    </div>
    <hr class="border-zinc-300"/>
    <div class="flex flex-col gap-2 py-2">
        <span class="leading-none">Collections</span>
        <CheckboxGroup name="collections" options={selectOptions.collections} showLimit=5 />
    </div>
    <hr class="border-zinc-300"/>
    <div class="flex flex-col gap-2 py-2">
        <span class="leading-none">Authenticators</span>
        <CheckboxGroup name="authenticators" options={selectOptions.authenticators} />
    </div>
    <hr class="border-zinc-300"/>
    <div class="flex flex-col gap-2 py-2">
        <span class="leading-none">Price</span>
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