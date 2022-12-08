// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-icon',
        '@nuxtjs/apollo'
    ],
    apollo: {
        clients: {
            default: {
                httpEndpoint: "https://wp.slowjams.xyz/graphql",
                httpLinkOptions: {
                    credentials: 'include'
                }
            }
        }
    }
})
