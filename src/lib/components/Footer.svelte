<script lang="ts">
    let { store } = $props();

    let currentYear = $state(new Date().getFullYear());
</script>

<div class="flex flex-col justify-center items-center bg-zinc-200 w-full h-screen text-zinc-800">
    <div class="grid grid-flow-col gap-16">
        <div class="row-span-6 grid grid-rows-subgrid gap-8">
            <span class="col-span-2 font-mono uppercase tracking-widest">site</span>
            <span>Home</span>
            <span>Events</span>
            <span>Products</span>
            <span>Singles</span>
            <span>Events</span>
            <span>Help Center</span>
            <span>Privacy</span>
            <span>Terms</span>
        </div>
        <div class="row-span-6 grid grid-rows-subgrid gap-8">
            <span class="font-mono uppercase tracking-widest">socials</span>
            <span>Facebook</span>
            <span>Instagram</span>
            <span>YouTube</span>
            <span>X</span>
        </div>
        <div class="row-span-6 grid grid-rows-subgrid gap-8">
            <span class="font-mono uppercase tracking-widest">outlets</span>
            <span>Shopee</span>
        </div>
        <div class="row-span-6 grid grid-rows-subgrid gap-8">
            <span class="font-mono uppercase tracking-widest">contact</span>
            <span>Email</span>
        </div>
    </div>
    <span class="pt-8">© {store.name} {currentYear}</span>
</div>