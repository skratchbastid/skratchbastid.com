export default defineNuxtRouteMiddleware((to, from) => {
    console.log("Middleware doing stuff")

//     const userQuery = gql`
//     query getUser {
//       viewer {
//         id
//         databaseId
//         firstName
//         lastName
//         email
//         capabilities
//       }
//     }
//   `
//   const { result, loading, error } = useQuery(userQuery)
//   console.log(result.viewer, result.value)
})