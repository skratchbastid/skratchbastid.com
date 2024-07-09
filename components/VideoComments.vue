<script setup>
const props = defineProps({
    videoId: {
        type: Number,
        required: true
    }
})

const userStore = useUserStore()
const user = computed(() => userStore.user)
const isVip = computed(() => userStore.isVip())

const commentContent = ref('')
const commenting = ref(false)
const comments = ref([])
const loading = ref(false)

const commentsQuery = gql`
query getComments($contentId: ID!) {
    comments(where: { contentId: $contentId }) {
        nodes {
            id
            content
            author {
                node {
                    name
                    avatar {
                        url
                    }
                }
            }
            date
        }
    }
}`

const { data } = await useAsyncQuery(commentsQuery, { contentId: props.videoId })
comments.value = data.value.comments.nodes

const submitCommentMutation = gql`
mutation CREATE_COMMENT($commentOn: Int!, $content: String!, $author: String!) {
    createComment(input: { commentOn: $commentOn, content: $content, author: $author }) {
        success
        comment {
            id
            content
            author {
                node {
                    name
                }
            }
            date
        }
    }
}`

const submitComment = async () => {
    loading.value = true
    const { mutate } = useMutation(submitCommentMutation)
    const response = await mutate({ commentOn: props.videoId, content: commentContent.value, author: user.value.username })
    if (response.data.createComment.success) {
        const newComment = response.data.createComment.comment
        comments.value.unshift(newComment)
        commentContent.value = ''
        commenting.value = false
        const textarea = document.querySelector('textarea')
        textarea.style.height = 'auto'
    }
    loading.value = false    
}

const adjustTextareaHeight = (event) => {
    const textarea = event.target
    // Reset the height to its default before recalculating
    textarea.style.height = 'auto'
    // Set the height to the scrollHeight, which is the height needed to accommodate the content without scrolling
    textarea.style.height = `${textarea.scrollHeight}px`
}


function authorName(name) {
    return name ? (name.includes('@') ? name.split('@')[0] : name) : 'Anonymous'
}

function clearComment() {
    commentContent.value = ''
    commenting.value = false
}

</script>

<template>
    <div class="mx-auto">
        <div v-if="isVip" class="flex">
            <div class="w-12">
                <img v-if="user?.avatar" :src="user?.avatar?.url" class="w-8 rounded-full" />
            </div>
            <div class="flex flex-col w-full">
                <div>
                    <textarea v-model="commentContent" @input="adjustTextareaHeight" @focus="commenting = true" type="text" placeholder="Add a comment..." rows="1" class="w-full py-1 font-light text-sm border-b-2 focus:border-b-black outline-none focus:outline-none focus:ring-0 overflow-y-auto resize-none" />
                </div>
                <div>
                    <div v-if="commenting" class="flex mt-2 justify-end gap-4">
                        <button @click="clearComment" class="text-gray-800 font-semibold text-sm">
                            Cancel
                        </button>
                        <button @click="submitComment" :disabled="commentContent.length == 0 || loading" class="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-200 disabled:text-gray-400 text-white font-semibold text-sm py-2 px-4 rounded-full">
                            Comment
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="comments my-2">
            <div v-if="!comments.length && isVip" class="font-light text-center mt-6">
                No comments yet - be the first to chime in!
            </div>
            <div>
                <div v-for="comment in comments" :key="comment.id" class="mb-3">
                    <div class="flex gap-3">
                        <div>
                            <img v-if="comment.author.node.avatar" :src="comment.author.node.avatar.url" class="w-8 rounded-full" />
                            <div v-else class="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center">
                                <span class="font-bold">{{ comment.author.node.name.charAt(0).toUpperCase() }}</span>
                            </div>
                        </div>
                        <div>
                            <div class="text-xs flex gap-1">
                                <span class="font-bold">{{ authorName(comment.author.node.name) }}</span>
                                <span class="text-gray-600">{{ $dayjs.utc(comment.date).fromNow() }}</span>
                            </div>
                            <div class="comment-content" v-html="comment.content"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.comment-content:deep(p) {
    margin-bottom: 10px;
}
</style>