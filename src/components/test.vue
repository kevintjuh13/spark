<template>
  <div>
    <h1>Test data</h1>
    <ul>
      <li v-for="item in testData" :key="item.id">
        {{ item.name }}
        <button @click="deleteTestData(item.id)">Delete</button>
      </li>
    </ul>
    <button @click="addTestData">Add</button>
  </div>
</template>
<script>
import { fetchTestData, addTestData, deleteTestData } from '../data.js'
export default {
  data() {
    return {
      testData: []
    }
  },
  mounted() {
    this.refreshTestData()
  },
  methods: {
    addTestData() {
      addTestData({ name: 'Test' })
        .then(() => {
          this.refreshTestData()
        })
        .catch((error) => {
          console.error('Error adding data: ', error)
        })
    },
    deleteTestData(id) {
      deleteTestData(id)
        .then(() => {
          this.refreshTestData()
        })
        .catch((error) => {
          console.error('Error deleting data: ', error)
        })
    },
    saveTestData() {
      updateTestData({ id: this.editId, name: this.editName })
        .then(() => {
          this.editId = null
          this.editName = ''
          this.refreshTestData()
        })
        .catch((error) => {
          console.error('Error updating data: ', error)
        })
    },
    refreshTestData() {
      fetchTestData()
        .then((data) => {
          this.testData = data
        })
        .catch((error) => {
          console.error('Error fetching data: ', error)
        })
    }
  }
}
</script>
