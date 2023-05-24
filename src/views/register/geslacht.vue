<template>
  <div class="container">
    <v-progress-linear model-value="60"></v-progress-linear>
    <div class="mt-16 sub-container">
      <h1 class="mb-2 title">Geslacht</h1>
      <h5 class="mb-5 sub-title">Ben je een man of een vrouw?</h5>
      <v-item-group mandatory>
        <v-col v-for="n in 2" :key="n" cols="12" md="4">
          <v-item v-slot="{ isSelected, toggle }">
            <v-btn
              :color="isSelected ? 'black' : ''"
              @click="toggle"
              dark
              height="40"
              width="200"
              rounded
              >{{ n === 1 ? 'Man' : 'Vrouw' }}</v-btn
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
      ></myButton>
    </div>
  </div>
</template>
<script>
import myButton from '../../components/button.vue'
export default {
  components: { myButton },
  data() {
    return {}
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
</style>
