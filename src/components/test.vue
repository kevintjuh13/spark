<template>
  <div>
    <h1>Test data</h1>
    <ul>
      <li v-for="item in testData" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
import { fetchTestData } from '../data.js'
export default {
  data() {
    return {
      testData: []
    }
  },
  mounted() {
    fetchTestData().then((data) => {
      this.testData = data
    })
  }
}
</script>
