import { useUserStore } from '~/stores/userStore'
import { useQuery } from '@vue/apollo-composable'
import { ref } from 'vue'

const userQuery = gql`
    query getUser {
        viewer {
            id
            userId
            username
            firstName
            lastName
            email
            subscriptions
            registeredDate
            roles {
                nodes {
                    name
                }
            }
            avatar {
                url
            }
        }
    }
`

export async function checkForLogin() {
    const user = ref(null)
    const { onResult, onError } = useQuery(userQuery, null, { fetchPolicy: 'network-only' })

    return new Promise((resolve, reject) => {
        onResult((result) => {
            if (result.data?.viewer) {
                user.value = result.data.viewer
                resolve(user.value)
            } else {
                resolve(null)
            }
        })

        onError((error) => {
            console.error("Error checking login:", error)
            reject(error)
        })
    })
}

// export async function login(email, password, url) {
//     const currentUser = useState('user')
//     const loginQuery = gql`
//         mutation logIn($login: String!, $password: String!) {
//             loginWithCookies(input: {
//             login: $login
//             password: $password
//             }) {
//             status
//             }
//         }
//         `;

//     const { mutate } = useMutation(loginQuery, {
//         variables: {
//             login: email,
//             password: password
//         },
//         refetchQueries: [
//             { query: userQuery }
//         ]
//     })
//     mutate().then(async (result) => {
//         const userStore = useUserStore()
//         const { data } = await useAsyncQuery(userQuery)
//         if (data?.value?.viewer) {
//             userStore.setUser(data.value.viewer)
//             // navigateTo(url || '/vip')
//         }
//         console.log('returned data: ', data)
//         return data.value
//     }).catch((err) => {
//         console.log("Error: ", err)
//         return err
//     })
// }

export async function login(email, password, url) {
    const currentUser = useState('user')
    const loginQuery = gql`
        mutation logIn($login: String!, $password: String!) {
            loginWithCookies(input: {
            login: $login
            password: $password
            }) {
            status
            }
        }
        `;

    const { mutate } = useMutation(loginQuery, {
        variables: {
            login: email,
            password: password
        },
        refetchQueries: [
            { query: userQuery }
        ]
    });

    // Note the return keyword here to return the promise chain
    return mutate().then(async (result) => {
        const userStore = useUserStore()
        const { data } = await useAsyncQuery(userQuery)
        if (data?.value?.viewer) {
            userStore.setUser(data.value.viewer)
            // Check if url is '/join' and redirect to '/vip' instead
            return navigateTo(url === '/join' ? '/vip' : (url || '/vip'))
        }
    }).catch((err, data) => {
        return err.message
    })
}

const LOG_OUT = gql`
  mutation logOut {
    logout(input: {}) {
      status
    }
  }
`;

export function logout() {
    const userStore = useUserStore()
    const { mutate } = useMutation(LOG_OUT, {
      refetchQueries: [
        { query: userQuery }
      ],
    });
   
    mutate().then((result) => {
        if (result.data.logout.status == 'SUCCESS') {
            userStore.setUser({})
            // navigateTo('/vip')
        }
    })
}