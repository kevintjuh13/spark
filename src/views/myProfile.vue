<template>
  <div class="container">
    <div class="top-bar">
      <v-icon class="mt-10 ml-10" size="30" icon="fas fa-arrow-left" />
      <h1 class="mt-8" style="font-size: 35px">Mijn Profiel</h1>
      <v-icon class="mt-10 mr-10" size="30" icon="fas fa-gear" @click="openDialog" />
    </div>
    <v-flex class="flex mt-10">
      <v-card class="card" width="300" height="220">
        <div class="avatar-container">
          <v-avatar size="60" color="black">
            <img class="avatar-img" src="../assets/thijs.jpg" alt="" />
          </v-avatar>
          <v-card-title>{{ user.name }}</v-card-title>
        </div>
        <div class="border-container">
          <div class="sub-div" style="border-right: 1px solid black">
            <h3>{{ user.age }}</h3>
          </div>
          <div class="sub-div">
            <h3>{{ user.gender }}</h3>
          </div>
        </div>
        <div class="title-container" @click="goToProfile">
          <v-card-title>Profiel bekijken</v-card-title>
        </div>
      </v-card>
    </v-flex>

    <v-flex class="flex">
      <v-card class="card mt-10" width="300" height="400"></v-card>
    </v-flex>

    <v-dialog v-model="dialogVisible" max-width="500">
      <v-card class="card">
        <v-card-title class="aanpassen text-center">Aanpassen</v-card-title>
        <v-card-text>
          <div class="dialog-div" @click="handleDialogButton('gegevens')">Gegevens aanpassen</div>
          <div class="dialog-div" @click="handleDialogButton('uitloggen')">Uitloggen</div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      user: {
        name: '',
        age: '',
        gender: '',
        show: '',
        interests: '' // Remove the trailing comma
      }
    }
  },
  mounted() {
    const userData = this.$route.query
    this.user.name = userData.name
    this.user.age = userData.age
    this.user.gender = userData.gender
    this.user.show = userData.show
    this.user.interest = userData.interest
    // Assign other data properties as needed
  },
  methods: {
    openDialog() {
      this.dialogVisible = true
    },
    handleDialogButton(option) {
      if (option === 'gegevens') {
        // Logic for 'gegevens aanpassen'
        console.log('het werkt')
      } else if (option === 'uitloggen') {
        // Logic for 'Intresses aanpassen'
      }
      this.dialogVisible = false
    },
    goToProfile() {
      const { name, age, gender, interest, show } = this.user
      console.log('Interests:', interest)
      this.$router.push({
        name: 'profile',
        query: { name, age, gender, interest: interest, show }
      })
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

.aanpassen {
  font-family: Quicksand-Bold;
}
.top-bar {
  display: flex;
  justify-content: space-between;
  height: 10%;
}

.card {
  border-radius: 20px;
}

.flex {
  display: flex;
  justify-content: center;
}

.avatar-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-bottom: 1px solid black;
}

.border-container {
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid black;
}
.sub-div {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50%;
}

.title-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
}
.avatar-img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.dialog-div {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 50px;
}
</style>
