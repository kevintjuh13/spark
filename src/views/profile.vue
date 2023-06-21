<template>
  <div class="container">
    <div class="top-bar">
      <v-icon class="mt-10 ml-10" size="30" icon="fas fa-arrow-left" @click="goBack" />
      <h1 class="title mt-8" style="font-size: 35px">Profile</h1>
    </div>
    <v-flex class="flex mt-10">
      <div class="card-container">
        <v-card class="card" width="300" height="350">
          <img class="avatar-img" :src="user.pictureURL" alt="" />
        </v-card>
        <v-card-title class="mt-3" style="font-size: 30px"
          >{{ user.name }}, {{ user.age }}</v-card-title
        >
      </div>
    </v-flex>
    <v-flex>
      <v-card-title class="mt-10">Over {{ user.name }} :</v-card-title>
      <v-chip class="ml-5" variant="outlined">{{ user.gender }}</v-chip>
      <v-chip class="ml-5" variant="outlined">Geinterreseerd in: {{ user.show }}</v-chip>
    </v-flex>
    <v-flex>
      <v-card-title class="mt-10">Interesses :</v-card-title>
      <template v-if="user.interest.length > 0">
        <template v-for="interest in user.interest" :key="interest">
          <v-chip class="ml-5 mt-5" variant="outlined">{{ interest }}</v-chip>
        </template>
      </template>
      <template v-else>
        <p>No interests available.</p>
      </template>
    </v-flex>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {
        id: '',
        name: '',
        age: '',
        gender: '',
        interest: [],
        show: '',
        pictureURL: ''
      }
    }
  },

  mounted() {
    const { id, name, age, gender, interest, show, pictureURL } = this.$route.query
    console.log('Interests:', interest)
    this.user.id = id || ''
    this.user.name = name || ''
    this.user.age = age || ''
    this.user.gender = gender || ''
    this.user.show = show || ''
    this.user.pictureURL = pictureURL || ''
    this.user.interest = interest ? interest.split(',') : []
  },
  methods: {
    goBack() {
      const { id, name, age, gender, interest, show, pictureURL } = this.user
      console.log('Interests:', interest)
      this.$router.push({
        name: 'myProfile',
        query: { id, name, age, gender, interest: interest.join(','), show, pictureURL }
      })
    }
  }
}
</script>
<style scoped>
@media only screen and (min-width: 768px) {
  .container {
    position: relative;
    font-family: Quicksand-Bold;
    height: 100vh;
    background-color: #f9f6f6;
    max-width: 100vw;
    overflow-x: hidden;
  }

  .card {
    border-radius: 20px;
  }

  .flex {
    display: flex;
    justify-content: center;
  }
  .top-bar {
    display: flex;

    height: 10%;
  }
  .avatar-img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  .card-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .title {
    margin-left: 260px;
  }
}
@media only screen and (max-width: 450px) {
  .container {
    position: relative;
    font-family: Quicksand-Bold;
    height: 100vh;
    background-color: #f9f6f6;
    max-width: 100vw;
    overflow-x: hidden;
  }

  .card {
    border-radius: 20px;
  }
  .avatar-img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  .flex {
    display: flex;
    justify-content: center;
  }
  .top-bar {
    display: flex;

    height: 10%;
  }
  .card-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .title {
    margin-left: 90px;
  }
}
</style>
