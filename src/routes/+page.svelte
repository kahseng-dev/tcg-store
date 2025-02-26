<script lang="ts">
    import Navbar from "$lib/components/Navbar.svelte";

    let project = $state("TCG Store")
    let page = $state("Home")
</script>

<svelte:head>
    <title>{page} | {project}</title>
</svelte:head>

<Navbar/>
<p></p>