<script lang="ts">
    let { title } = $props();
</script>

<div class="m-8 flex justify-between">
    <a href="./" class="text-2xl font-bold">{title}</a>
    <button class="outline-2 rounded-full flex items-center px-4 pb-0.5">
        menu
        <i class="pl-1 ph ph-plus text-base"></i>
    </button>
</div>
