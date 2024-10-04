import { useUserStore } from '~/stores/userStore'
import { checkForLogin } from '~/composables/auth'
import { addProperty, sendMemberDataToHive } from '~/server/services/hiveService'

export default defineNuxtRouteMiddleware(async (to, from) => {
    const userStore = useUserStore()

    // Only check for login if we don't have a user in the store
    if (!userStore.user.id && process.client) {
        console.log('No user in store and on client side, checking for login')
        try {
            console.log('Attempting to check for login')
            const user = await checkForLogin()
            console.log('checkForLogin result:', user)
            if (user) {
                console.log('User found, setting user in store')
                userStore.setUser(user)
                console.log('Sending member data to Hive', user.email)
                sendMemberDataToHive(userStore.user)
                console.log('Adding membership type property', userStore.membershipType)
                addProperty('membershipType', userStore.membershipType)
            } else {
                console.log('No user found after checkForLogin')
            }
        } catch (error) {
            console.error('Error checking login:', error)
        }
    }
})