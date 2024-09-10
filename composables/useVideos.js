import { ref } from 'vue'
import { useQuery } from '@vue/apollo-composable'

export const useVideos = () => {
  const latestStreams = ref([])
  const loading = ref(true)

  const latestStreamsQuery = gql`
        query getStreams {
            streams(first: 10, where: {
                taxQuery: {
                taxArray: [
                    {
                    terms: ["Deep Dive"],
                    taxonomy: STREAMTYPE,
                    operator: NOT_IN,
                    field: NAME
                    }
                ]
            }
            }) {
                nodes {
                id
                databaseId
                title
                vimeoID
                slug
                imageLink
                vimeoThumbnail
                cloudflareVideoID
                date
                streamTypes {
                    edges {
                        node {
                            id
                            name
                        }
                    }
                }
                }
                pageInfo {
                endCursor
                hasNextPage
                }
            }
        }`
    

  const { result, loading: queryLoading, error } = useQuery(latestStreamsQuery)

  watch(result, (newResult) => {
    if (newResult) {
      latestStreams.value = newResult.streams.nodes
      loading.value = false
    }
  })

  return {
    latestStreams,
    loading,
    error
  }
}
