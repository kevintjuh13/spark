<template>
  <div class="container">
    <div class="top-bar">
      <v-icon class="mt-10 ml-10" size="30" icon="fas fa-search" />
      <h1 class="ml-5 mt-8" style="font-size: 35px">Dates</h1>
      <v-avatar class="mt-8 mr-10" color="surface-variant" size="45"></v-avatar>
    </div>
    <v-row class="mt-10 content">
      <v-col class="sub-content" cols="12" sm="6" md="6" lg="4" v-for="index in 3" :key="index">
        <v-card width="350" height="250" class="card">
          <div class="avatar-container">
            <v-avatar class="mt-5" color="surface-variant" size="75">
              <img class="avatar-img" src="../assets/thijs.jpg" alt="" />
            </v-avatar>
            <v-card-title>Thijs, 19</v-card-title>
            <v-card-text style="font-size: 20px">Netflix & Chill</v-card-text>
          </div>
          <div class="card-footer">
            <v-card-subtitle class="mt-6">Ma 17 apr.</v-card-subtitle>
            <v-btn class="button mr-4 mt-5" rounded>Details</v-btn>
          </div>
          <v-card-subtitle>17:00 - 20:00</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
    <navbar></navbar>
  </div>
</template>

<script>
import navbar from '../components/navbar.vue'

export default {
  components: {
    navbar
  },
  data() {
    return {}
  }
}
</script>

<style scoped>
.container {
  font-family: Quicksand-Bold;
  height: 100vh;
  background-color: #f9f6f6;
}
.sub-content {
  display: flex;
  justify-content: center;
}

.top-bar {
  display: flex;
  justify-content: space-between;
  height: 10%;
}

.content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;
}

.card {
  border-radius: 20px;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.3);
  margin-bottom: 16px;
}

.avatar-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 150px;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  height: 50px;
  margin-top: 30px;
}

.button {
  background-color: #f9cd52;
  border: 0.1rem solid black;
}

.avatar-img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
</style>
