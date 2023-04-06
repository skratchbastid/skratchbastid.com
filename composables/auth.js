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
    const userIsVip = useState('userIsVip')
    const user = useState('user')
    userIsVip.value = false
    const { result, onResult } = useQuery(userQuery, {
        fetchPolicy: "no-cache" 
    })
    onResult((result) => {
        if (result.data.viewer) {
            useState('user').value = result.data.viewer
            const subscriptions = result.data.viewer.subscriptions.split(',')
            // if subscriptions contains '65' then we're a VIP
            if (subscriptions.includes('64')) {
                userIsVip.value = true
            }
        }
    })
}


export function login(email, password) {
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
        currentUser.value = useQuery(userQuery).result
        return navigateTo('/vip')
    }).catch((err) => {
        console.log("Error: ", err)
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
    const userIsVip = useState('userIsVip')
    const currentUser = useState('user')
    const { mutate } = useMutation(LOG_OUT, {
      refetchQueries: [
        { query: userQuery }
      ],
    });
   
    mutate().then((result) => {
        if (result.data.logout.status == 'SUCCESS') {
            userIsVip.value = false
            currentUser.value = null
        }
    })
}