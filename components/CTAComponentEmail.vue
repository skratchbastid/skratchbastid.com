<template>
  <div class="bg-white relative overflow-hidden">

    <div class="relative z-10 text-center px-8 py-8 md:py-8 max-w-lg mx-auto">
      <h1 class="md:text-3xl text-3xl font-bold uppercase mb-2">
        Subscribe now
      </h1>

      <p class="text-[16px] text-gray-600 mb-8 mx-auto">
        Wanna have a taste of the Top Grillin’ Experience? Sign up for a free trial (no card information required).
        <a href="#" class="underline">Privacy Policy</a>. 
        By clicking above, you agree that we may process your information in accordance with these terms.
      </p> 

      <form 
        v-if="!user?.id"
        class="hive-signup-form mx-auto" 
        @submit.prevent="submitHiveForm"
        style="max-width: 400px;"
      >
        <input data-HIVE-FORM-FIELD="swid" type="hidden" value="9308" />

        <label for="_HIVE-email-9308" class="text-left w-full">Email</label>
        <input 
          data-HIVE-FORM-FIELD="email" 
          id="_HIVE-email-9308" 
          name="email" 
          type="email" 
          placeholder="Enter an email..." 
          autocomplete="email" 
          required 
        />

        <label for="_HIVE-firstName-9308" class="text-left w-full">First Name</label>
        <input 
          data-HIVE-FORM-FIELD="firstName" 
          id="_HIVE-firstName-9308" 
          name="fname" 
          type="text" 
          placeholder="Enter a first name..." 
          autocomplete="given-name" 
        />

        <label for="_HIVE-phoneNumber-9308" class="text-left w-full">Phone number</label>
        <input 
          data-HIVE-FORM-FIELD="phoneNumber" 
          id="_HIVE-phoneNumber-9308" 
          name="pnumber" 
          type="text" 
          placeholder="Enter a phone number..." 
          autocomplete="given-name" 
        />

        <button 
          type="submit" 
          data-HIVE-FORM-FIELD="submitButton"
          class="w-full bg-[#FF5941] text-white font-bold uppercase mb-12 py-3 rounded-xl hover:bg-[#e04f39] transition"
        >
          Try it for Free!
        </button>
      </form>
    </div>

    <img 
      src="/img/bottom_image.png" 
      alt="Bottom Image" 
      class="absolute bottom-0 left-0 w-full object-cover"
    />
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useUserStore } from '@/stores/userStore'

const userStore = useUserStore()
const user = computed(() => userStore.user)


onMounted(() => {
  if (!window.HIVE_SDK) {
    const script = document.createElement('script');
    script.src = 'https://cdn-prod.hive.co/static/js/sdk-loader.js?sef=1&r=' + parseInt(new Date() / 60000);
    script.async = true;
    script.id = 'HIVE_SDK';
    document.head.appendChild(script);

    script.onload = () => {
      window.HIVE_SDK('init', 133267);
    };
  } else {
    window.HIVE_SDK('init', 133267);
  }
});

function submitHiveForm(event) {
  const form = event.target;
  if(window.HIVE_SDK) {
    window.HIVE_SDK('submitSignupForm', form, onFormSubmitSuccess);
  }
}

function onFormSubmitSuccess() {
  alert("Thanks for joining the Top Grillin' Trial! Check your email for dope stuff!");
}
</script>

<style scoped>
.hive-signup-form-has-error {
  border-color: #ff00008a !important;
}
.hive-signup-form label, 
.hive-signup-form input, 
.hive-signup-form button, 
.hive-signup-form span, 
.hive-signup-form .iti {
  display: flex;
  align-items: flex-start;
  width: 100%;
  max-width: 400px;
}
.hive-signup-form label {
  margin-bottom: 8px;
  font-weight: 600;
}
.hive-signup-form input {
  margin-bottom: 16px;
  padding: 8px 10px;
  border-radius: 3px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: inset 0 1px rgba(0, 0, 0, 0.04);
}
.hive-signup-form input:focus{
  border: 1px solid rgba(0, 0, 0, 0.65);
  outline: none;
}
.hive-signup-form button {
  padding: 10px 24px;
  border-radius: 12px;
  background-color: rgba(255, 89, 65);
  cursor: pointer;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  transition: background-color 0.3s ease;
  justify-content: center;
}
.hive-signup-form button:hover {
  background-color: #e04f39;
}
</style>

