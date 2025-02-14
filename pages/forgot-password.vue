<script setup>
    definePageMeta({
        layout: 'blank'
    })
    const email = ref('')

    const { mutate } = useMutation(
        gql`
            mutation forgotPassword($username: String!) {
                sendPasswordResetEmail(input: { username: $username }) {
                    user {
                        id
                        email
                    }
                }
            }
        `,
        () => ({
            variables: {
                username: email.value
            }
        }),
        {
            onCompleted: () => {
                alert('Check your email for a link to reset your password.')
            },
            onError: (error) => {
                alert(error.message)
            }
        }
    )

    const resetPassword = async () => {
        console.log('reset password')
        try {
            const response = await mutate()
        } catch(error) {
            console.log(error)
        }
    }
</script>
<template>
    <div class="w-full min-h-[100vh] bg-[#F7FAFC] flex flex-col items-center justify-center">
        <div class="w-full h-full flex items-center justify-center">
            <div class="bg-white rounded shadow-xl p-12 w-11/12 sm:w-8/12 lg:w-[35%] flex flex-col">
                <span class="font-semibold text-2xl mb-8">Reset your password.</span>
                <form class="flex flex-col" @submit.prevent="resetPassword">
                    <div class="flex flex-col mb-6">
                        <label for="email">
                            <span class="text-sm font-semibold text-slate-600 mb-2 inline-block">Email</span>
                        </label>
                        <input type="email" v-model="email" class="w-full border border-1 p-3 rounded bg-white">
                    </div>
                    <button type="submit" class="w-full bg-slate-800 text-white p-2 rounded">Reset My Password</button>
                </form>
            </div>
        </div>
    </div>
</template>