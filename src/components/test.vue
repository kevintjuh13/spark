<template>
  <div>
    <h1>Test data</h1>
    <ul>
      <li v-for="item in testData" :key="item.id">{{ item.name }}</li>
    </ul>
    <button @click="addTestData">click me</button>
  </div>
</template>

<script>
import { fetchTestData, addTestData } from '../data.js'
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
  },
  methods: {
    addTestData() {
      addTestData({ name: 'Test' })
        .then((data) => {
          console.log('Data added: ', data)
          fetchTestData().then((data) => {
            this.testData = data
          })
        })
        .catch((error) => {
          console.error('Error adding data: ', error)
        })
    }
  }
}
</script>
