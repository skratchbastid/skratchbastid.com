import { useUserStore } from '~/stores/userStore'
import { checkForLogin } from '~/composables/auth'

export default defineNuxtRouteMiddleware(async (to, from) => {
    const userStore = useUserStore()

    // Only check for login if we don't have a user in the store
    if (!userStore.user.id && process.client) {
        try {
            const user = await checkForLogin()
            if (user) {
                userStore.setUser(user)
            }
        } catch (error) {
            console.error('Error checking login:', error)
        }
    }
})