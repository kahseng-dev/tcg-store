<script lang="ts">
    let stories = fetchStories();

    function fetchStories() {
        let result = [
            {
                caption: "Come check out our new collection!",
                timestamp: "2025-01-11",
                images: [""],
                likes: 11,
                comments: 7
            },
            {
                caption: "New supplies just arrived!",
                timestamp: "2025-02-10",
                images: ["",""],
                likes: 20,
                comments: 2
            },
            {
                caption: "Unboxing on the way!",
                timestamp: "2025-03-05",
                images: [""],
                likes: 5,
                comments: 4
            }
        ];

        return result;
    }
</script>

<div class="flex flex-col items-center">
    <p class="font-bold text-2xl">Our Stories</p>
    <div class="my-4 flex text-2xl gap-8">
        <a class="p-0.5" href="./" aria-label="x-social">
            <i class="ph-fill ph-x-logo"></i>
        </a>
        <a class="p-0.5" href="./" aria-label="youtube-social">
            <i class="ph-fill ph-youtube-logo"></i>
        </a>
        <a class="p-0.5" href="./" aria-label="instagram-social">
            <i class="ph-fill ph-instagram-logo"></i>
        </a>
    </div>
</div>
<div class="flex justify-center gap-2">
    {#each stories as story}
        <div class="w-64 h-64 bg-zinc-500 flex flex-col text-white">
            <div class="h-4 text-right text-xl pr-1">
                {#if story.images.length > 1}
                    <i class="ph-fill ph-cards"></i>
                {/if}
            </div>
            <div class="flex flex-col h-full justify-center items-center pb-8 px-8">
                <div class="flex items-center pb-4">
                    <i class="ph ph-heart"></i>
                    <p class="pl-2 pr-4 text-sm">{story.likes}</p>
                    <i class="ph ph-chat-circle"></i>
                    <p class="pl-2 text-sm">{story.comments}</p>
                </div>
                <p class="text-center text-sm break-words w-full">{story.caption}</p>
            </div>
        </div>
    {/each}
</div>