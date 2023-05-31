<template>
  <div>
    <!-- <myButton size="large" width="200" rounded="xl" buttonText="hey"></myButton>
    <textfield></textfield>
    <test></test> -->
    <navbar></navbar>
  </div>
</template>
<script>
import myButton from '../../components/button.vue'
import textfield from '../../components/textfield.vue'
import test from '../../components/test.vue'
import navbar from '../../components/navbar.vue'
export default {
  components: {
    myButton,
    textfield,
    test,
    navbar
  }
}
</script>
