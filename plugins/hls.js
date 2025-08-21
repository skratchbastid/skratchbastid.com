// hls.js loader for Nuxt
import Hls from 'hls.js';
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('hls', {
    mounted(el, binding) {
      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(binding.value);
        hls.attachMedia(el);
        el._hls = hls;
      } else if (el.canPlayType('application/vnd.apple.mpegurl')) {
        el.src = binding.value;
      }
    },
    unmounted(el) {
      if (el._hls) {
        el._hls.destroy();
      }
    }
  });
});
