<template>
  <div class="container">
    <v-progress-linear model-value="45"></v-progress-linear>
    <div class="mt-16 sub-container">
      <h1 class="mb-2 title">Geslacht</h1>
      <h5 class="mb-5 sub-title">Ben je een man of een vrouw?</h5>
      <v-item-group v-model="selectedGender" mandatory>
        <v-col v-for="(gender, index) in genders" :key="index" cols="12" md="4">
          <v-item v-slot="{ isSelected, toggle }">
            <v-btn
              class="buttons"
              :color="isSelected ? 'black' : ''"
              @click="toggle"
              dark
              rounded
              >{{ gender }}</v-btn
            >
          </v-item>
        </v-col>
      </v-item-group>
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
      selectedGender: 0, // Initialize with the index of the default selected gender
      genders: ['Man', 'Vrouw']
    }
  },

  methods: {
    async submit() {
      const id = this.$route.query.id
      const name = this.$route.query.name
      const age = this.$route.query.age
      const gender = this.genders[this.selectedGender]
      const user = {
        id: id,
        name: name,
        age: age,
        gender: gender
      }
      console.log('Submitting user:', user)
      try {
        const updatedUser = await updateUserData(user)
        console.log('User updated:', updatedUser)
        this.$router.push({
          path: '/show',
          query: {
            name: name,
            id: id,
            age: age,
            gender: gender
          }
        })
      } catch (error) {
        console.error('Error updating user:', error)
      }
    }
  }
}
</script>

<style scoped>
@media only screen and (min-width: 768px) {
  .container {
    font-family: Quicksand-Bold;
    height: 100vh;
    background-color: #f9cd52;
  }
  .registratie-knop {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    height: 48%;
  }
  .sub-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .title {
    font-size: 40px;
  }
  .sub-title {
    font-size: 20px;
  }
  .buttons {
    width: 250px;
    height: 60px;
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
    height: 52%;
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
  .buttons {
    width: 200px;
    height: 40px;
  }
}
</style>
