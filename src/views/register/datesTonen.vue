<template>
  <div class="container">
    <v-progress-linear model-value="60"></v-progress-linear>
    <div class="mt-16 sub-container">
      <h1 class="mb-2 title">Dates Tonen</h1>
      <h5 class="mb-5 sub-title">In wat bent u geïnteresseerd?</h5>
      <v-item-group v-model="selectedShow" mandatory>
        <v-col v-for="n in 3" :key="n" cols="12" md="4">
          <v-item v-slot="{ isSelected, toggle }">
            <v-btn
              :color="isSelected ? 'black' : ''"
              @click="toggle"
              dark
              height="40"
              width="200"
              rounded
              >{{ n === 1 ? 'Man' : n === 2 ? 'Vrouw' : 'Beide' }}</v-btn
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
      selectedShow: null
    }
  },

  methods: {
    async submit() {
      const id = this.$route.query.id
      const name = this.$route.query.name
      const age = this.$route.query.age
      const gender = this.$route.query.gender
      const user = {
        id: id,
        name: name,
        age: age,
        gender: gender,
        show: this.selectedShow === 0 ? 'Man' : this.selectedShow === 1 ? 'Vrouw' : 'Beide'
      }
      console.log('Submitting user:', user)
      try {
        const updatedUser = await updateUserData(user)
        console.log('User updated:', updatedUser)
        this.$router.push({
          path: '/intresses',
          query: {
            name: name,
            id: id,
            age: age,
            gender: gender,
            show: user.show
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
.container {
  font-family: Quicksand-Bold;
  height: 100vh;
  background-color: #f9cd52;
}
.registratie-knop {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  height: 42%;
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
