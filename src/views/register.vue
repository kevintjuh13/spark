<template>
  <div class="container">
    <div class="logo">
      <logo></logo>
      <h1 class="mt-10 title">REGISTRATIE</h1>
    </div>
    <v-form @submit.prevent="submit">
      <div class="inputs">
        <v-text-field
          v-model="email"
          variant="solo"
          class="textfields"
          label="Email"
          :rules="rulesEmail"
          placeholder="kev2000in@hotmail..."
        ></v-text-field>
        <v-text-field
          v-model="password"
          variant="solo"
          class="textfields"
          label="Wachtwoord"
          type="password"
          :rules="rulesPassword"
          placeholder="********"
        ></v-text-field>
      </div>
      <div class="registratie-knop">
        <myButton
          class="mr-2"
          style="background-color: black; color: white; font-size: 30px"
          type="submit"
          icon
          buttonText=">"
          :disabled="!isFormValid"
        ></myButton>
      </div>
    </v-form>
  </div>
</template>

<script>
import { addUser } from '../data.js'
import logo from '../components/logo/logo.vue'
import myButton from '../components/button.vue'

export default {
  components: {
    logo,
    myButton
  },
  data() {
    return {
      email: '',
      password: '',
      errorMessage: '',
      rulesEmail: [
        (value) => {
          if (!value) return 'Voer een email in'
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
          if (!emailRegex.test(value)) return 'Email is ongeldig'
          return true
        }
      ],

      rulesPassword: [
        (value) => {
          if (!value) return 'Voor een wachtwoord in'
          if (value.length < 8) return 'Wachtwoord moet 8 karakters lang zijn'
          if (value.length > 15) return 'Wachtwoord moet minder dan 15 karakters lang zijn'
          return true
        }
      ]
    }
  },
  computed: {
    isFormValid() {
      return (
        this.rulesEmail.every((rule) => rule(this.email) === true) &&
        this.rulesPassword.every((rule) => rule(this.password) === true)
      )
    }
  },
  methods: {
    async submit() {
      const user = {
        email: this.email,
        password: this.password,
        name: ''
      }
      console.log('Submitting user: ', user)
      try {
        const savedUser = await addUser(user)
        console.log('User saved: ', savedUser)
        this.$router.push({
          path: '/firstname',
          query: { name: user.name, id: savedUser.id }
        })
      } catch (error) {
        console.error('Error submitting form: ', error)
      }
    }
  }
}
</script>

<style scoped>
@import url(../style.css);
@media only screen and (min-width: 768px) {
  /* CSS styles for tablet devices */
  .textfields {
    width: 250px;
  }

  .registratie-knop {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 10%;
    margin-top: 100px !important;
  }
  .inputs {
    width: 100%;
    height: 40%;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    flex-direction: column;
  }
  .title {
    font-size: 40px;
  }
  .logo {
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .container {
    font-family: Quicksand-Bold;
    height: 100vh;
    background-color: #f9cd52;
  }
}
@media only screen and (max-width: 450px) {
  .textfields {
    width: 220px;
  }

  .registratie-knop {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 10%;
    margin-top: 100px !important;
  }
  .inputs {
    width: 100%;
    height: 40%;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    flex-direction: column;
  }
  .logo {
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .container {
    font-family: Quicksand-Bold;
    height: 100vh;
    background-color: #f9cd52;
  }
}
</style>
