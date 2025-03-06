<script lang="ts">
    let { url, text, color } = $props();
</script>

<a class="group w-fit text-{color}" href={url}>
    {text}
    <span class="h-[1px] flex max-w-0 bg-{color} transition-all duration-300 group-hover:max-w-full"></span>
</a>
