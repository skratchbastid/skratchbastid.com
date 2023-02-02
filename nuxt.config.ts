// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default {
    app: {
        head: {
            title: 'Skratch Bastid',
            meta: [
                { description: 'Official home of Skratch Bastid. DJ. Producer. Someone to count on in a world ever-changing.'}
            ]
        }
    },
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
