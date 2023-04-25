<template>
  <div class="container">
    <div class="logo">
      <logo></logo>
    </div>
  </div>
</template>
<script>
import logo from '../components/logo/logo.vue'

export default {
  components: {
    logo
  }
}
</script>
<style scoped>
.logo {
  width: 100%;
  height: 50%;
  display: flex;
  justify-self: center;
}
.container {
  height: 100vh;
  background-color: #f9cd52;
}
</style>
