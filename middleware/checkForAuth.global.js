import { useUserStore } from '~/stores/userStore'
import { checkForLogin } from '~/composables/auth'
import { addProperty, sendMemberDataToHive } from '~/server/services/hiveService'

export default defineNuxtRouteMiddleware(async (to, from) => {
    // Get the user store instance
    const userStore = useUserStore()

    // Check for login only if there's no user in the store and we're on the client side
    if (!userStore.user.id && process.client) {
        try {
            // Attempt to retrieve user data
            const user = await checkForLogin()
            
            if (user) {
                // If a user is found, update the store
                userStore.setUser(user)
                
                // Send member data to Hive for analytics/tracking
                console.log('Sending member data to Hive:', user)
                await sendMemberDataToHive(user)
                
                // Add membership type as a property for segmentation
                console.log('Adding property to Hive:', 'membershipType', userStore.membershipType)
                await addProperty('membershipType', userStore.membershipType)
            }
            // If no user is found, the store remains unchanged
        } catch (error) {
            // Log any errors that occur during the login check
            console.error('Error checking login:', error)
        }
    }
})