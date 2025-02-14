<script setup>
    const streamsQuery = gql`
        query getEpisodes {
            episodes(first: 10) {
                nodes {
                    title
                    vimeoID
                    slug
                    imageLink
                    date
                }
                pageInfo {
                    endCursor
                    hasNextPage
                }
            }       
        }`
    
    const { result, fetchMore, loading, error, onResult } = useQuery(streamsQuery)
    
    onResult((result) => {
        streams.value = result.data.episodes.nodes
        pageInfo.value = result.data.episodes.pageInfo
    })   
</script>
<template>
    <div class="max-w-[85%] m-auto my-12">
        <h2 class="font-extrabold text-2xl mb-2">Latest Videos</h2>
        <div class="flex gap-6">
            <div class="aspect-video bg-gray-300 w-full"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/WNoye_KZFzA?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
            <div class="aspect-video bg-gray-300 w-full"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/UTc18ikdIfc?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        </div>
    </div>
</template>