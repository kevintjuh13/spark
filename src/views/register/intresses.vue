<template>
  <div class="container">
    <v-progress-linear model-value="45"></v-progress-linear>
    <div class="mt-16 sub-container">
      <h1 class="mb-2 title">INTRESSES</h1>
      <h5 class="mb-5 sub-title">Kies hier uit maximaal 5 intresses!</h5>
      <div class="chips-container">
        <v-chip v-for="optie in opties" :key="optie.id" class="mb-4 ml-1 chips">{{
          optie.optie
        }}</v-chip>
      </div>
    </div>
    <div class="registratie-knop">
      <myButton
        class="mr-2"
        style="background-color: black; color: white; font-size: 30px"
        type="submit"
        icon
        buttonText=">"
      ></myButton>
    </div>
  </div>
</template>
<script>
import myButton from '../../components/button.vue'
import { fetchOpties } from '../../data.js'

export default {
  components: {
    myButton
  },
  data() {
    return {
      opties: []
    }
  },
  mounted() {
    this.fetchOpties()
  },
  methods: {
    fetchOpties() {
      fetchOpties()
        .then((data) => {
          this.opties = data
        })
        .catch((error) => {
          console.error(error)
        })
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
  height: 35%;
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
.chips-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.chip {
  margin-right: 10px;
  margin-bottom: 10px;
}

/* Add additional styles as needed */
</style>
