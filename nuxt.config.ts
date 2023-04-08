// https://v3.nuxtjs.org/api/configuration/nuxt.config
import { defineNuxtConfig } from 'nuxt/config'


export default defineNuxtConfig({
    app: {
        head: {
            title: 'Skratch Bastid',
            meta: [
                { description: "Official home of Skratch Bastid. DJ. Producer. Someone to count on in a world ever-changing."}
            ]
        }
    },
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-icon',
        '@nuxtjs/apollo',
        '@nuxt/image-edge',
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
    },
    image: {
        provider: 'cloudflare',
        cloudflare: {
            baseURL: 'https://imagedelivery.net/pBWn_5oX0Np5kM_4V8gAww/'
        }
    }
})
