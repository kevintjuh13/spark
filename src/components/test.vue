<template>
  <div>
    <h1>Test data</h1>
    <ul>
      <li v-for="item in informatie" :key="item.id">{{ item.locatie + item.leeftijd }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      testData: [],
      informatie: []
    }
  },
  mounted() {
    fetch('http://localhost:3000/tests')
      .then((response) => response.json())
      .then((data) => {
        this.testData = data
      })
      .catch((error) => console.error('Error fetching data: ', error))

    fetch('http://localhost:3000/test2')
      .then((response) => response.json())
      .then((data) => {
        this.informatie = data
      })
      .catch((error) => console.error('Error fetching data: ', error))
  }
}
</script>
