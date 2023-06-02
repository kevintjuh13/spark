<template>
  <div class="container">
    <div class="top-bar">
      <v-icon class="mt-10 ml-10" size="30" icon="fas fa-arrow-left" />
      <h1 class="title mt-8" style="font-size: 35px">Date Info</h1>
    </div>
    <v-flex class="d-flex justify-center align-center mt-10">
      <v-card width="350" height="750" class="card">
        <v-card-text class="text-center">
          <v-avatar color="black" size="80"></v-avatar>
        </v-card-text>
        <v-card-title class="text-center">Thijs</v-card-title>
        <v-card-title class="text-center">22</v-card-title>
        <v-card-title class="text-center">Netflix & chill</v-card-title>
        <v-flex class="sub-container">
          <v-row class="mx-2 my-1">
            <v-icon class="ml-10 mt-8" color="#f9cd52" icon="fas fa-calendar"></v-icon>
            <v-card-title class="mt-5">test</v-card-title>
          </v-row>
          <v-row class="mx-2 my-1">
            <v-icon class="ml-10 mt-8" color="#f9cd52" icon="fas fa-calendar"></v-icon>
            <v-card-title class="mt-5">test</v-card-title>
          </v-row>
          <v-row class="mx-2 my-1">
            <v-icon class="ml-10 mt-8" color="#f9cd52" icon="fas fa-calendar"></v-icon>
            <v-card-title class="mt-5">test</v-card-title>
          </v-row>
          <v-card-title class="text-center">Beschrijving</v-card-title>
          <v-card-subtitle class="text-center">
            <textarea class="textArea" rows="6" readonly>
Hey, dit is een test en ik wil dat die begint op een nieuwe regel begint elke keer als ik type en iets vertel  </textarea
            >
          </v-card-subtitle>
          <v-card-title class="text-center">
            <v-btn class="btn" width="175" height="40" color="#f9cd52" rounded>Aanmelden</v-btn>
          </v-card-title>
        </v-flex>
      </v-card>
    </v-flex>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      menu2: false
    }
  }
}
</script>

<style scoped>
.container {
  position: relative;
  font-family: Quicksand-Bold;
  height: 100vh;
  background-color: #f9f6f6;
  max-width: 100vw;
  overflow-x: hidden;
}

.textArea {
  width: 200px;
}
.top-bar {
  display: flex;
  height: 10%;
}

.title {
  margin-left: 70px;
}

.btn {
  border: 1px solid black;
}

.card {
  border-radius: 20px;
}
</style>
