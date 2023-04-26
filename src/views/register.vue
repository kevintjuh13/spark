<template>
  <div class="container">
    <div class="logo">
      <logo></logo>
      <h1 class="mt-10">REGISTRATIE</h1>
    </div>
    <form @submit.prevent="register">
      <div class="inputs">
        <textField
          variant="solo"
          class="textfields"
          label="Email"
          placeholder="kev2000in@hotmail..."
        ></textField>
        <textField
          variant="solo"
          class="textfields"
          label="Wachtwoord"
          type="password"
          placeholder="kev2000in@hotmail..."
        ></textField>
      </div>
      <div class="registratie-knop">
        <myButton
          class="mr-2"
          style="background-color: black; color: white; font-size: 30px"
          icon
          buttonText=">"
        ></myButton>
      </div>
    </form>
  </div>
</template>

<script>
import logo from '../components/logo/logo.vue'
import textField from '../components/textfield.vue'
import myButton from '../components/button.vue'

export default {
  components: {
    logo,
    myButton,
    textField
  }
}
</script>

<style scoped>
@import url(../style.css);
.textfields {
  width: 220px;
}

.registratie-knop {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 10%;
  margin-top: 200px !important;
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
</style>
