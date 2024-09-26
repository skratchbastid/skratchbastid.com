import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
    const user = ref({})
    const userIsVip = ref(false)

    function setUser(newUser) {
        user.value = {
            ...newUser,
            subscriptions: typeof newUser.subscriptions === 'string'
                ? newUser.subscriptions.split(',').map(s => s.trim())
                : Array.isArray(newUser.subscriptions)
                    ? newUser.subscriptions
                    : (newUser.subscriptions ? [newUser.subscriptions] : [])
        }
        userIsVip.value = isVip()
    }

    const isAdmin = computed(() => {
        return user.value.roles?.nodes?.some((role) => role.name === 'administrator') ?? false
    })

    function isVip() {
        const vip = user.value.subscriptions?.includes('64') ?? false
        const admin = user.value.roles?.nodes?.some((role) => role.name === 'administrator') ?? false
        return vip || admin
    }

    const membershipType = computed(() => {
        if (!user.value.id) return 'guest'
        if (isVip()) return 'vip'
        return 'free'
    })

    return { user, userIsVip, setUser, isVip, isAdmin, membershipType }
})