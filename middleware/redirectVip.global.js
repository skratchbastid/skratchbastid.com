export default defineNuxtRouteMiddleware((to) => {
  if (to.path === '/vip') {
    return navigateTo('/topgrillin', { redirectCode: 301 })
  }
})
