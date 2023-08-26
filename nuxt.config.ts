// https://v3.nuxtjs.org/api/configuration/nuxt.config
import { BulkContactManagement, Template } from 'node-mailjet';
import { defineNuxtConfig } from 'nuxt/config'
// import signedUrl from './server/api/signedUrl';
import {isProduction} from "std-env";


export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            google_analytics_id: 'G-GTXBY1X48E',
            production_mode: isProduction
        }
    },
    app: {
        head: {
            title: 'Skratch Bastid',
            meta: [
                { description: "Official home of Skratch Bastid. DJ. Producer. Someone to count on in a world ever-changing."}
            ],
            link: [{ rel: 'icon', type: 'image/png', href: '/img/favicon.png' }],
        }
    },
    // serverMiddleware: [{ path: '/api/signedUrl', handler: signedUrl }],
    imports: {
        dirs: ['stores']
    },
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-icon',
        '@nuxtjs/apollo',
        '@nuxt/image-edge',
        '@pinia/nuxt',
    ],
    cloudinary: {
        cloudName: '',
        apiKey: '',
        apiSecret: ''
    },
    pinia: {
        autoImports: [
            'defineStore'
        ]
    },
    apollo: {
        clients: {
            default: {
                httpEndpoint: "https://wp.skratchbastid.com/graphql",
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
        },
        cloudinary: {
            baseURL: 'https://res.cloudinary.com/dmlnwhtt2/image/upload/'
        }
    },
},
)