<template>
  <div>
    <myButton size="large" width="200" rounded="xl" buttonText="hey"></myButton>
    <textfield></textfield>
  </div>
</template>
<script>
import myButton from '../../components/button.vue'
import textfield from '../../components/textfield.vue'
export default {
  components: {
    myButton,
    textfield
  }
}
</script>
