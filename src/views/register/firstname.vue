<template>
  <div class="container">
    <v-progress-linear model-value="15"></v-progress-linear>
    <div class="mt-16 sub-container">
      <h1 class="mb-2 title">VOORNAAM</h1>
      <h5 class="mb-5 sub-title">Wat is je voornaam?</h5>
      <v-text-field class="textField" label="Voornaam" variant="solo" v-model="name"></v-text-field>
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
      name: this.$route.query.name || ''
    }
  },
  methods: {
    async submit() {
      const id = this.$route.query.id
      const user = {
        name: this.name,
        id: id
      }
      console.log('Submitting user: ', user)
      try {
        const updatedUser = await updateUserData(user)
        console.log('User updated: ', updatedUser)
        this.$router.push({
          path: '/age',
          query: { name: this.name, id: id }
        })
      } catch (error) {
        console.error('Error updating user: ', error)
      }
    }
  }
}
</script>

<style scoped>
.container {
  font-family: Quicksand-Bold;
  height: 100vh;
  background-color: #f9cd52;
}
.registratie-knop {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  height: 60%;
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
</style>
