import { readBody } from 'h3'
import { sendMemberDataToHive } from '@/server/services/hiveService'
import { getMember } from '@/server/services/memberpressService'
const memberships = [
    { id: 836, name: 'Free' },
    { id: 64, name: 'VIP' },
]

const EVENT_TYPES = {
    SUBSCRIPTION_CREATED: 'subscription-created',
    SUBSCRIPTION_EXPIRED: 'subscription-expired',
    SUBSCRIPTION_STOPPED: 'subscription-stopped',
    RENEWAL_TRANSACTION_COMPLETED: 'renewal-transaction-completed',
}

const handleMemberData = (data) => ({
    id: data.member.id,
    email: data.member.email,
    first_name: data.member.first_name,
    last_name: data.member.last_name,
})

const handleSubscriptionData = (data) => ({
    id: data.membership.id,
    title: data.membership.title,
    totalPrice: data.total || undefined,
    status: data.status || undefined,
})

export default defineEventHandler(async (event) => {
    if (event.node.req.method === 'GET') {
        return { statusCode: 200, body: 'Webhook endpoint is working' }
    }

    if (event.node.req.method === 'POST') {
        const body = await readBody(event)
        const eventType = body.event

        let member = {}
        let subscription = {}

        switch (eventType) {
            case EVENT_TYPES.SUBSCRIPTION_CREATED:
                console.log('Subscription created')
                member = handleMemberData(body.data)
                subscription = handleSubscriptionData(body.data)
                break
            case EVENT_TYPES.SUBSCRIPTION_EXPIRED:
                console.log('Subscription expired')
                member = handleMemberData(body.data)
                subscription = handleSubscriptionData(body.data)
                break
            case EVENT_TYPES.SUBSCRIPTION_STOPPED:
                console.log('Subscription stopped')
                member = handleMemberData(body.data)
                subscription = handleSubscriptionData(body.data)
                break
            case EVENT_TYPES.RENEWAL_TRANSACTION_COMPLETED:
                console.log(eventType)
                member = handleMemberData(body.data)
                break
            default:
                console.log(`Unknown event type: ${eventType}`)
                return { statusCode: 400, body: 'Unknown event type' }
        }

        console.log("member", member)
        console.log("subscription", subscription)

        const hiveResponse = await sendMemberDataToHive(member, subscription)
        console.log(hiveResponse)

        const memberpressResponse = await getMember(member.id)
        console.log(memberpressResponse)

        return { statusCode: 200, body: 'Webhook endpoint is working' }
    }
})
