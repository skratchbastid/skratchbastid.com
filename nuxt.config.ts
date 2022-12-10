// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default {
    target: 'static',
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
}
