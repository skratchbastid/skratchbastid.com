# Query Guidelines for Skratch Bastid Website

## Tech Stack
- Back-end: Headless WordPress
- Front-end: Nuxt JS (using Composition API and `<script setup>`)
- GraphQL for data fetching
- Apollo Client integration

## General Query Structure
Use the `gql` tag for GraphQL queries.

## Fetching Streams
Used in `useVideos` composable:

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
}

## Fetching a Single Stream
Used in `[slug].vue`:

query getVideo($slug: ID!) {
  stream(id: $slug, idType: SLUG) {
    id
    databaseId
    title
    date
    vimeoID
    imageLink
    cloudflareVideoID
    mp3Link
    noMicMP3Link
  }
}

## Key Fields
- `id`: Unique identifier
- `databaseId`: WordPress database ID
- `title`: Stream title
- `vimeoID`: Vimeo video ID
- `slug`: URL slug
- `imageLink`: Thumbnail image URL
- `date`: Publication date
- `cloudflareVideoID`: Cloudflare video ID (alternative to Vimeo)
- `mp3Link`: Download link for MP3
- `noMicMP3Link`: Download link for MP3 without microphone audio

## Taxonomy
- `streamTypes`: Used for categorizing streams
  - Access via `streamTypes.edges.node.name`

## Filtering
Example of filtering out "Deep Dive" stream type:

where: {
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
}

## Query Execution in Nuxt
1. Using `useAsyncQuery`:
const { data } = await useAsyncQuery(query, variables)

2. Using `useQuery` with `watch`:
const { result, loading, error } = useQuery(query)

watch(result, (newResult) => {
  if (newResult) {
    // Handle result
  }
})

## Component Integration
In components like `LatestStreams.vue`, use composables for data fetching:

const { latestStreams: streams, loading, error } = useVideos()

Remember to handle loading states and errors in components.

## Pagination
When fetching multiple items, include `pageInfo` for pagination:

pageInfo {
  endCursor
  hasNextPage
}

## Variables in Queries
For queries that require variables, define them in the query and pass them when executing:

const query = gql`
  query getVideo($slug: ID!) {
    stream(id: $slug, idType: SLUG) {
      // fields
    }
  }
`

const { data } = await useAsyncQuery(query, { slug: route.params.slug })

## Error Handling
Always check for errors in your components:

const { latestStreams: streams, loading, error } = useVideos()

// In template
<div v-if="error">Error: {{ error.message }}</div>

## Loading States
Use the `loading` state to show loading indicators:

<template>
  <div v-if="loading">Loading...</div>
  <div v-else-if="streams.length">
    <!-- Display streams -->
  </div>
</template>

Remember to adapt queries and data handling to specific component needs while maintaining consistent patterns across the application.