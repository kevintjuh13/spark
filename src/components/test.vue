<template>
  <div>
    <h1>Test data</h1>
    <ul>
      <li v-for="item in informatie" :key="item.id">{{ item.locatie + item.leeftijd }}</li>
    </ul>
    <p>{{ table.name }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      testData: []
    }
  },
  mounted() {
    fetch('http://localhost:3000/tests')
      .then((response) => response.json())
      .then((data) => {
        this.testData = data
      })
      .catch((error) => console.error('Error fetching data: ', error))
  }
}
</script>
