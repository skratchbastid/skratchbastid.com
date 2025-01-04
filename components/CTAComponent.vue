<template>
  <div class="bg-white relative overflow-hidden">
    <!--<img 
      src="/img/left_image.png" 
      alt="Left Image" 
      class="absolute top-1/4 left-[6rem] h-[85%] w-auto object-cover hidden md:block"
    />
    <img 
      src="/img/right_image.png" 
      alt="Right Image" 
      class="absolute top-1/4 right-[6rem] h-[85%] w-auto object-cover hidden md:block"
    />-->

    <div class="relative z-10 text-center px-8 py-16 md:py-28">
      <h1 class="md:text-5xl text-3xl font-bold uppercase mb-8">
        Subscribe to top grillin'
      </h1>

      <NuxtLink 
        to="/join"
        class="flex flex-col items-center gap-4 max-w-md mx-auto mb-4"
      >
        <button 
          type="submit" 
          class="w-full bg-[#FF5941] text-white font-bold uppercase py-3 rounded-xl hover:bg-[#e04f39] transition"
        >
          Subscribe
        </button>
      </NuxtLink>

      <p class="text-sm text-gray-600 mb-14 max-w-3xl mx-auto">
        You can opt out anytime. We will treat your information with respect. 
        For more information about our privacy practices, please read Boiler Room's 
        <a href="#" class="underline">Privacy Policy</a>. 
        By clicking above, you agree that we may process your information in accordance with these terms.
      </p>

      <NuxtLink target="_blank" to="https://music.apple.com/ca/curator/bastids-bbq/1735562122" style="width: 100%; display: flex; justify-content: center;">
        <img 
          src="/img/appleMusicBlack.png" 
          alt="Small Image" 
          class="w-44 mx-auto"
        />
      </NuxtLink> 
    </div>

    <img 
      src="/img/bottom_image.png" 
      alt="Bottom Image" 
      class="absolute bottom-0 left-0 w-full object-cover"
    />
  </div>
</template>

<style scoped>
div {
  position: relative;
  overflow: hidden;
}

img {
  position: absolute;
  z-index: 0;
}

img[src="/img/left_image.png"] {
  left: 6rem;
}

img[src="/img/right_image.png"] {
  right: 6rem;
}

@media (max-width: 768px) {
  img[src="/img/left_image.png"],
  img[src="/img/right_image.png"] {
    display: none;
  }
}
</style>
