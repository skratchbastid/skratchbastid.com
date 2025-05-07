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
        const vipIds = ['64', '1071', '1072']
        const subscriptions = user.value.subscriptions || []
        const isVip = subscriptions.some(sub => vipIds.includes(sub))
        const isAdmin = user.value.roles?.nodes?.some(role => role.name === 'administrator') ?? false
    
        return isVip || isAdmin
    }
    

    const membershipType = computed(() => {
        //console.log(JSON.stringify(user.value?.subscriptions))

        if (!user.value?.id) return 'guest'
        if (isVip()) return 'vip'
        return 'free'
    })

    return { user, userIsVip, setUser, isVip, isAdmin, membershipType }
})