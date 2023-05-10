<template>
  <div class="container">
    <v-progress-linear model-value="30"></v-progress-linear>
    <div class="mt-16 sub-container">
      <h1 class="mb-2 title">LEEFTIJD</h1>
      <h5 class="mb-5 sub-title">Wat is je leeftijd?</h5>
      <v-text-field class="textField" label="leeftijd" type="number" variant="solo"></v-text-field>
    </div>
  </div>
</template>

<style scoped>
.container {
  font-family: Quicksand-Bold;
  height: 100vh;
  background-color: #f9cd52;
}
.sub-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 90%;
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
