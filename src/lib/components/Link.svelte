<script lang="ts">
    let { url, text, color, class: className = undefined } = $props();
</script>

<a class="font-semibold text-{color} {className} overflow-hidden line-clamp-2 hover:underline" href={url}>{text}</a>