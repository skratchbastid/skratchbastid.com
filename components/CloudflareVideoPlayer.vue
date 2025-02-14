<script setup>
    // accept props
    const { videoId } = defineProps({
        videoId: {
            type: String,
            required: true
        }
    })

    const customerId = '2yd4airrrq0kllu0'

    const iframeSrc = `https://customer-${customerId}.cloudflarestream.com/${videoId}/iframe`
    const streamPlayer = ref(null)

    const initPlayer = () => {
        const script = document.createElement('script')
        script.src = 'https://embed.cloudflarestream.com/embed/sdk.latest.js'
        script.async = true
    }

    onMounted(() => {
        initPlayer()
    })
</script>

<template>
    <div class="aspect-video">
        <iframe
            :src="iframeSrc"
            style="border: none"
            width="100%"
            height="100%"
            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
            allowfullscreen="true"
            ref="streamPlayer"
        ></iframe>
    </div>
</template>