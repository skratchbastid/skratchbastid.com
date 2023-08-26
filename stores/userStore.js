import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
    const user = ref({})
    const userIsVip = ref(false)

    function setUser(newUser) {
        user.value = newUser
    }

    function isVip() {
        const vip = user?.value?.subscriptions?.includes('64') ? true : false
        const admin = user?.value?.roles?.nodes?.some((role) => role.name === 'administrator') ? true : false
        return vip || admin
    }

    return { user, userIsVip, setUser, isVip }
})