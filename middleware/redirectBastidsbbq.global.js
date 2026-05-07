export default defineNuxtRouteMiddleware((to) => {
  if (to.path === '/bastidsbbq' || to.path === '/bastidsbbq/') {
    return navigateTo('https://www.skratchbastid.live/bastidsbbq', {
      external: true,
      redirectCode: 301,
    })
  }
})
