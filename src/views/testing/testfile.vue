<template>
  <div>
    <myButton size="large" width="200" rounded="xl" buttonText="hey"></myButton>
    <textfield></textfield>
    <test></test>
  </div>
</template>
<script>
import myButton from '../../components/button.vue'
import textfield from '../../components/textfield.vue'
import test from '../../components/test.vue'
export default {
  components: {
    myButton,
    textfield,
    test
  }
}
</script>
