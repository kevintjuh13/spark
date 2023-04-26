<template>
  <div class="container">
    <div class="logo">
      <logo></logo>
      <h1 class="mt-10">FIND YOUR</h1>
      <h1>PERFECT DATE</h1>
    </div>
    <div class="buttons">
      <myButton class="mb-5" width="200" height="40" rounded="xl" buttonText="Inloggen"></myButton>
      <router-link to="/register">
        <myButton width="200" height="40" rounded="xl" buttonText="Registreren"></myButton>
      </router-link>
    </div>
  </div>
</template>

<script>
import logo from '../components/logo/logo.vue'
import myButton from '../components/button.vue'

export default {
  components: {
    logo,
    myButton
  }
}
</script>

<style scoped>
@import url(../style.css);

.buttons {
  width: 100%;
  height: 50%;
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
</style>
