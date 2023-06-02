<template>
  <div>
    <v-dialog transition="dialog-bottom-transition" width="auto">
      <template v-slot:activator="{ props }">
        <v-btn color="primary" v-bind="props">From the bottom</v-btn>
      </template>
      <template v-slot:default="{ isActive }">
        <v-card>
          <v-toolbar color="primary" title="Opening from the bottom"></v-toolbar>
          <v-card-text>
            <div class="text-h2 pa-12">Hello world!</div>
          </v-card-text>
          <v-card-actions class="justify-end">
            <v-btn variant="text" @click="isActive.value = false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
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
