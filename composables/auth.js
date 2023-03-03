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
    console.log("Check For Login")
    const currentUser = useState('user')
    const user = useQuery(userQuery).result
    currentUser.value = user
    console.log(currentUser.value)
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