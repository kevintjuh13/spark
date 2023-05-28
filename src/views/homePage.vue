<template>
  <div class="container">
    <div class="top-bar">
      <v-icon class="mt-10 ml-10" size="30" icon="fas fa-search " />
      <h1 class="ml-5 mt-8" style="font-size: 35px">Dates</h1>
      <v-avatar class="mt-8 mr-10" color="surface-variant" size="45"></v-avatar>
    </div>
    <div class="content">
      <div class="v-card" v-for="index in 2" :key="index">
        <v-card width="400" height="300" class="card">
          <div class="avatar-container">
            <v-avatar class="mt-5" color="surface-variant" size="75">
              <img class="avatar-img" src="../assets/thijs.jpg" alt="" />
            </v-avatar>
            <v-card-title>Thijs, 19</v-card-title>
            <v-card-text style="font-size: 20px">Netflix & Chill</v-card-text>
          </div>
          <div class="card-footer">
            <v-card-subtitle class="mt-5">Ma 17 apr.</v-card-subtitle>
            <v-btn class="button mr-4 mt-7" rounded> Details</v-btn>
          </div>
          <v-card-subtitle>17:00 - 20:00</v-card-subtitle>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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

.top-bar {
  display: flex;
  justify-content: space-between;
  height: 10%;
}

.content {
  display: flex;
  justify-content: center;
  align-items: center; /* Added to vertically center the cards */
  flex-direction: column; /* Changed from row to column */
  height: 90%;
}

.card {
  border-radius: 20px;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.3);
  margin-bottom: 16px; /* Added margin between the cards */
}

.avatar-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 400px;
  height: 150px;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  width: 400px;
  height: 50px;
  margin-top: 60px;
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
