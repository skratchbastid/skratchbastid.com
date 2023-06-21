import { useRouter } from 'vue-router'
import { useUserStore } from '~/stores/userStore'
const userQuery = gql`
    query getUser {
        viewer {
            id
            username
            firstName
            lastName
            email
            subscriptions
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
    try {
        const { data } = await useAsyncQuery(userQuery)
        let user = {}
        if (data?.value?.viewer) {
            user = data.value.viewer
        }
        return user
    } catch(err) {
        console.log("Error: ", err)
        return null
    }
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
            return navigateTo(url || '/vip')
        }
        // return data.value
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