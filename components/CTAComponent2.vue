<template>
  <div class="w-full bg-white p-6 rounded-2xl">
    <!-- Immagine con bordi arrotondati -->
    <img 
      src="/img/imgCTA.png" 
      alt="Image" 
      class="w-full rounded-xl mb-6 object-cover md:h-[100%] h-[30vh]"
    />

    <!-- Contenitore riga -->
    <div 
      class="grid grid-cols-12 items-center gap-4 md:grid md:grid-cols-12 md:gap-4 md:items-center"
    >
      <!-- Titolo -->
      <h2 
        class="col-span-12 md:col-span-2 text-lg font-bold text-gray-800 mb-2 md:mb-0"
      >
        Bastid's BBQ
      </h2>

      <!-- Descrizione -->
      <p 
        class="col-span-12 md:col-span-8 text-gray-600 mb-4 md:mb-0"
      >
        Bastid’s BBQ was founded in 2011 by acclaimed DJ Skratch Bastid as a platform to channel his passions of music, food, and building community. Today, the party has become a globally recognized event series, spanning multiple cities around the world and bringing some of the most talented and legendary DJs and producers in music to its stage. Life is always better with good music, good food, and good people.
      </p>

      <NuxtLink
              to="https://bastidsbbq.com/"
              class="w-[max-content]"
              target="_blank"
            >
      <button 
        class="col-span-12 md:col-span-2 bg-[#FF5941] text-white py-2 px-4 rounded-lg hover:bg-[#e04f39] transition"
      >
        Learn more
      </button>
    </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
@media (max-width: 768px) {
  .grid {
    display: block; 
  }

  .grid > * {
    margin-bottom: 16px;
  }

  .grid > *:last-child {
    margin-bottom: 0; 
  }
}
</style>