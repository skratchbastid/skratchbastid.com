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
    const currentUser = useState('user')
    const userIsVip = useState('userIsVip')
    userIsVip.value = false
    const { result, onResult } = useQuery(userQuery, {
        fetchPolicy: "no-cache" 
    })
    onResult((result) => {
        if (result.data.viewer) {
            const subscriptions = result.data.viewer.subscriptions.split(',')
            // if subscriptions contains '65' then we're a VIP
            if (subscriptions.includes('64')) {
                userIsVip.value = true
            }
        }
        currentUser.value = result.data.viewer
    })
}


export function login(email, password) {
    console.log(`Login: ${email}, ${password}`)
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
        console.log(result.data.loginWithCookies?.status)
        currentUser.value = useQuery(userQuery).result
        console.log("Now we get it?", currentUser.value)
        console.log(useQuery(userQuery).result)
        return navigateTo('/vip')
    }).catch((err) => {
        console.log("Whoops", err)
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
    console.log("Let's log out...")
    const { mutate } = useMutation(LOG_OUT, {
      refetchQueries: [
        { query: userQuery }
      ],
    });
   
    mutate().then((result) => {
        console.log(result.data)
    })
}