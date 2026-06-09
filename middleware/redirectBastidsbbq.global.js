export default defineNuxtRouteMiddleware((to) => {
  const bastidsBbqPaths = ['/bastidbbq', '/bastidbbq/', '/bastidsbbq', '/bastidsbbq/']

  if (bastidsBbqPaths.includes(to.path)) {
    return navigateTo('https://skratchbastid.live/bastidsbbq/', {
      external: true,
      redirectCode: 301,
    })
  }
})
