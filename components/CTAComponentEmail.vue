<template>
  <div class="bg-white relative overflow-hidden py-8 px-6 max-w-md mx-auto">
    <div class="relative z-10 text-center mb-8">
      <h1 class="text-3xl font-bold uppercase mb-2">Try it for free</h1>
      <p class="text-gray-600 text-base mb-6 mx-auto max-w-xs">
        Wanna have a taste of the Top Grillin’ Experience? Sign up for a free trial (no card info required). 
        <a href="#" class="underline">Privacy Policy</a>. By clicking above, you agree we may process your info per these terms.
      </p>
    </div>

    <form
      ref="hiveForm"
      class="hive-signup-form"
      @submit.prevent="submitForm"
      novalidate
    >
      <!-- HIVE required hidden field -->
      <input data-HIVE-FORM-FIELD="swid" type="hidden" value="9308" />

      <label for="_HIVE-email-9308">Email</label>
      <input
        data-HIVE-FORM-FIELD="email"
        id="_HIVE-email-9308"
        name="email"
        type="email"
        placeholder="Enter an email..."
        autocomplete="email"
        required
      />

      <label for="_HIVE-firstName-9308">First Name</label>
      <input
        data-HIVE-FORM-FIELD="firstName"
        id="_HIVE-firstName-9308"
        name="fname"
        type="text"
        placeholder="Enter a first name..."
        autocomplete="given-name"
      />

      <label for="_HIVE-lastName-9308">Last Name</label>
      <input
        data-HIVE-FORM-FIELD="lastName"
        id="_HIVE-lastName-9308"
        name="lname"
        type="text"
        placeholder="Enter a last name..."
        autocomplete="family-name"
      />

      <label for="_HIVE-phoneNumber-9308">Phone Number</label>
      <input
        data-HIVE-FORM-FIELD="phoneNumber"
        data-HIVE-INTL-PHONE-NUMBER="true"
        id="_HIVE-phoneNumber-9308"
        name="phone"
        type="tel"
        placeholder="Enter a phone number..."
        autocomplete="tel"
      />

      <!-- Non-toggleable segments hidden -->
      <input data-HIVE-FORM-FIELD="addToSegment" type="hidden" value="Signup Form - Homepage" />
      <input data-HIVE-FORM-FIELD="addToSegment" type="hidden" value="VIP Free Trial" />

      <!-- Bot detection -->
      <div style="position: absolute; left: -5000px;" aria-hidden="true">
        <input type="text" data-HIVE-FORM-FIELD="areUReal" tabindex="-1" value="" />
      </div>

      <button type="submit" data-HIVE-FORM-FIELD="submitButton" class="mt-4">
        Start your free trial
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'HiveSignupForm',

  mounted() {
    if (!window.HIVE_SDK) {
      const script = document.createElement('script')
      script.src =
        'https://cdn-prod.hive.co/static/js/sdk-loader.js?sef=1&r=' +
        parseInt(new Date() / 60000)
      script.async = true
      script.id = 'HIVE_SDK'
      document.head.appendChild(script)
      script.onload = () => {
        window.HIVE_SDK('init', 133267)
        console.log('HIVE_SDK loaded and initialized')
      }
    } else {
      window.HIVE_SDK('init', 133267)
    }
  },

  methods: {
    submitForm() {
      if (!this.$refs.hiveForm) {
        console.error('Form reference not found')
        return
      }
      if (!window.HIVE_SDK) {
        alert('Please wait, the signup service is still loading.')
        return
      }
      try {
        window.HIVE_SDK('submitSignupForm', this.$refs.hiveForm, () => {
          alert('Thanks for joining the Top Grillin’ Trial! Check your email for dope stuff!')
        })
      } catch (err) {
        console.error('Error submitting form via Hive SDK:', err)
        alert('Something went wrong. Please try again later.')
      }
    }
  }
}
</script>

<style scoped>
/* Stile ispirato al tuo secondo snippet */
.hive-signup-form {
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}
.hive-signup-form label {
  font-weight: 600;
  margin-bottom: 8px;
  display: block;
}
.hive-signup-form input {
  margin-bottom: 16px;
  padding: 8px 10px;
  border-radius: 3px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: inset 0 1px rgba(0, 0, 0, 0.04);
  width: 100%;
  font-size: 1rem;
}
.hive-signup-form input:focus {
  border: 1px solid rgba(0, 0, 0, 0.65);
  outline: none;
}
.hive-signup-form button {
  padding: 10px 24px;
  border-radius: 12px;
  background-color: rgba(255, 89, 65, 1);
  cursor: pointer;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  transition: background-color 0.3s ease;
  display: flex;
  justify-content: center;
}
.hive-signup-form button:hover {
  background-color: #e04f39;
}
</style>
