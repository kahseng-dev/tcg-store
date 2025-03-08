<script lang="ts">
    let { price, currency = "USD"} = $props();

    const formatter = new Intl.NumberFormat('default', {
        style: "currency",
        currency: currency,
    });
</script>

<p class="font-bold text-2xl">{formatter.format(price)}</p>