<template>
  <div class="container">
    <v-progress-linear model-value="100"></v-progress-linear>
    <div class="mt-16 sub-container">
      <h1 class="mb-2 title">FOTO'S</h1>
      <h5 class="mb-5 sub-title">Voeg 2 fotos toe</h5>
      <v-file-input class="test" label="File input"></v-file-input>
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
  components: { myButton }
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

.title {
  font-size: 30px;
}
.sub-title {
  font-size: 14px;
}
.test {
  width: 300px;
}
</style>
