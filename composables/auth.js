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


export function login(email, password, url) {
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
    })
    mutate().then(async (result) => {
        const userStore = useUserStore()
        // const user = useQuery(userQuery, {
        //     fetchPolicy: "no-cache" 
        // })
        // userStore.setUser(user.result)
        const { data } = await useAsyncQuery(userQuery)
        if (data?.value?.viewer) {
            userStore.setUser(data.value.viewer)
            navigateTo('/vip')
        }
        
    }).catch((err) => {
        console.log("Error: ", err)
        return false
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
            userStore.setUser(null)
            // navigateTo('/vip')
        }
    })
}