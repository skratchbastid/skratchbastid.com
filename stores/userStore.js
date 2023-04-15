import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
    const user = ref({})
    const userIsVip = ref(false)

    function setUser(newUser) {
        console.log("SetUser: ", newUser)
        console.log("Existing User: ", user.value)
        user.value = newUser
    }

    return { user, userIsVip, setUser }
})