import { useRouter } from 'vue-router'

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

export function checkForLogin() {
    console.log("Check")
    const { result, onResult } = useQuery(userQuery)
    onResult((result) => {
        console.log(result.data)
        const currentUser = useState('user')
        const userIsVip = useState('userIsVip')
        if (result.data.viewer) {
            currentUser.value = result.data
            const subscriptions = result.data.viewer.subscriptions.split(',')
            if (subscriptions.includes('64')) {
                userIsVip.value = true
            }
        }
    })
    

}

// export function checkForLogin() {
//     const userIsVip = useState('userIsVip', () => false)
//     const user = useState('user', () => null)

//     const { result, onResult } = useQuery(userQuery, {
//         fetchPolicy: "no-cache" 
//     })
//     onResult((result) => {
//         if (result.data.viewer) {
//             user.value = result.data.viewer
//             // useState('user').value = result.data.viewer
//             const subscriptions = result.data.viewer.subscriptions.split(',')
//             // if subscriptions contains '64' then we're a VIP
//             console.log(subscriptions)
//             if (subscriptions.includes('64')) {
//                 console.log("The user is in fact a VIP!")
//                 userIsVip.value = true
//             } else {
//                 console.log("User is not VIP")
//             }
//         }
//     })
// }


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
    mutate().then((result) => {
        // currentUser.value = useQuery(userQuery).result.viewer
        const user = useQuery(userQuery, {
            fetchPolicy: "no-cache" 
        })
        currentUser.value = user.result
        navigateTo(url || '/vip')
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

// export function logout() {
//     const userIsVip = useState('userIsVip')
//     const currentUser = useState('user')
//     const { mutate } = useMutation(LOG_OUT);
   
//     mutate().then((result) => {
//         if (result.data.logout.status == 'SUCCESS') {
//             userIsVip.value = false
//             currentUser.value = null
//         }
//     })
// }
export function logout() {
    const { mutate } = useMutation(LOG_OUT, {
      refetchQueries: [
        { query: userQuery }
      ],
    });
   
    mutate().then((result) => {
        if (result.data.logout.status == 'SUCCESS') {
            const userIsVip = useState('userIsVip')
            const currentUser = useState('user')
            userIsVip.value = false
            currentUser.value = null
            console.log("Should be logged out now")
            navigateTo('/vip')
        }
    })
}