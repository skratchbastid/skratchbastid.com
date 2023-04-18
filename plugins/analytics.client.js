import VueGtag, { trackRouter } from 'vue-gtag-next'

export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig()
    if (!config.public.production_mode) {
        nuxtApp.vueApp.use(VueGtag, {
            property: {
                id: 'G-GTXBY1X48E',
            }
        })
        trackRouter(useRouter())
         
    } else {
        console.log("Not in production mode, not loading Google Analytics.")
    }
})