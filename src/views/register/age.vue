<template>
  <div class="container">
    <v-progress-linear model-value="30"></v-progress-linear>
    <div class="mt-16 sub-container">
      <h1 class="mb-2 title">LEEFTIJD</h1>
      <h5 class="mb-5 sub-title">Wat is je leeftijd?</h5>
      <v-text-field class="textField" label="Leeftijd" variant="solo" v-model="age"></v-text-field>
    </div>
    <div class="registratie-knop">
      <myButton
        class="mr-2"
        style="background-color: black; color: white; font-size: 30px"
        type="submit"
        icon
        buttonText=">"
        @click="submit"
      ></myButton>
    </div>
  </div>
</template>
<script>
import myButton from '../../components/button.vue'
import { updateUserData } from '../../data.js'
export default {
  components: { myButton },
  data() {
    return {
      age: '',
      name: this.$route.query.name
    }
  },

  methods: {
    async submit() {
      const id = this.$route.query.id
      const user = {
        name: this.$route.query.name,
        age: this.age,
        id: id
      }
      console.log('Submitting user: ', user)
      try {
        const updatedUser = await updateUserData(user)
        console.log('User updated: ', updatedUser)
        this.$router.push({
          path: '/gender',
          query: { name: this.$route.query.name, id: id, age: this.age }
        })
      } catch (error) {
        console.error('Error updating user: ', error)
      }
    }
  }
}
</script>
<style scoped>
@media only screen and (min-width: 768px) {
  /* CSS styles for tablet devices */
  .container {
    font-family: Quicksand-Bold;
    height: 100vh;
    background-color: #f9cd52;
  }
  .registratie-knop {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    height: 55%;
  }
  .sub-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .textField {
    width: 300px;
  }
  .title {
    font-size: 40px;
  }
  .sub-title {
    font-size: 20px;
  }
}
@media only screen and (max-width: 450px) {
  .container {
    font-family: Quicksand-Bold;
    height: 100vh;
    background-color: #f9cd52;
  }
  .registratie-knop {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    height: 58%;
  }
  .sub-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .textField {
    width: 220px;
  }
  .title {
    font-size: 30px;
  }
  .sub-title {
    font-size: 14px;
  }
}
</style>
