<template>
    <div class="logo-container">
      <img 
        :src="imageSrc" 
        alt="Logo" 
        :class="logoClass"
        class="transition-all duration-1000"
      />
    </div>
  </template>
  
  
  <script setup>
import { ref, onMounted } from 'vue';

// URL dell'immagine del logo
const imageSrc = '/img/logo_loading.png';

// Classe reattiva che alterna tra le due
const logoClass = ref('w-[100px] md:w-[200px] m-auto pb-2');

// Funzione per alternare la classe ogni 2 secondi
const toggleLogoClass = () => {
  logoClass.value = logoClass.value === 'w-[100px] md:w-[200px] m-auto pb-2'
    ? 'w-[100px] md:w-[200px] m-auto pb-2 transform -scale-x-100'
    : 'w-[100px] md:w-[200px] m-auto pb-2';
};

// Impostiamo l'aggiornamento ogni 2 secondi al momento del montaggio
onMounted(() => {
  setInterval(toggleLogoClass, 2000); // Alterna ogni 2 secondi
});
</script>

  
<style scoped>
.logo-container {
  display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 1000;
    background: white;
}

img {
  transition: transform 1s, width 1s, opacity 1s;
}
</style>
