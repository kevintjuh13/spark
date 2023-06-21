<template>
  <div class="container">
    <div class="top-bar">
      <v-icon class="mt-10 ml-10" size="30" @click="goBack" icon="fas fa-arrow-left" />
      <h1 class="mt-8" style="font-size: 35px">Mijn Profiel</h1>
      <v-icon class="mt-10 mr-10" size="30" icon="fas fa-gear" @click="openDialog" />
    </div>
    <v-flex class="flex mt-10">
      <v-card class="card-img mt-10">
        <img class="img" :src="user.pictureURL" alt="" />
      </v-card>
    </v-flex>

    <v-flex class="flex mt-10">
      <v-card class="card-user">
        <div class="avatar-container">
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

    <v-dialog v-model="dialogVisible" max-width="500">
      <v-card class="card">
        <v-card-title class="aanpassen text-center">Aanpassen</v-card-title>
        <v-card-text>
          <div class="dialog-div" @click="handleDialogButton('gegevens')">Gegevens aanpassen</div>

          <router-link to="/login" class="uitloggen">
            <div class="dialog-div" @click="handleDialogButton('uitloggen')">Uitloggen</div>
          </router-link>
          <div class="dialog-div" @click="handleDialogButton('verwijderen')">
            Account verwijderen
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { deleteUserData } from '../data.js'
export default {
  data() {
    return {
      dialogVisible: false,
      user: {
        id: '',
        name: '',
        age: '',
        gender: '',
        show: '',
        interest: '',
        pictureURL: ''
      }
    }
  },
  mounted() {
    const userData = this.$route.query
    this.user.id = userData.id
    this.user.name = userData.name
    this.user.age = userData.age
    this.user.gender = userData.gender
    this.user.show = userData.show
    this.user.interest = userData.interest
    this.user.pictureURL = userData.pictureURL
  },
  methods: {
    // opent de pop-up
    openDialog() {
      this.dialogVisible = true
    },
    // als je op een knop in de pop-up klikt gebeurd er het volgende :
    handleDialogButton(option) {
      if (option === 'gegevens') {
        const { id } = this.user
        this.$router.push({
          name: 'firstname',
          query: { id }
        })
      } else if (option === 'uitloggen') {
      } else if (option === 'verwijderen') {
        const { id } = this.user

        deleteUserData(id)
          .then(() => {
            this.$router.push('/login')
          })
          .catch((error) => {
            console.error('Error deleting user account:', error)
          })
      }

      this.dialogVisible = false
    },
    // gaat terug naar de homepagina met deze data
    goBack() {
      const { id, name, age, gender, interest, show, pictureURL } = this.user
      this.$router.push({
        name: 'homePage',
        query: { id, name, age, gender, interest, show, pictureURL }
      })
    },

    // gaat naar de profile pagina met deze data
    goToProfile() {
      const { id, name, age, gender, interest, show, pictureURL } = this.user
      console.log('Interests:', interest)
      this.$router.push({
        name: 'profile',
        query: { id, name, age, gender, interest: interest, show, pictureURL }
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

  .aanpassen {
    font-family: Quicksand-Bold;
  }
  .top-bar {
    display: flex;
    justify-content: space-between;
    height: 10%;
  }

  .img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  .card-img {
    width: 300px;
    height: 350px;
    border-radius: 20px;
  }

  .card-user {
    width: 350px;
    height: 170px;
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
  .uitloggen {
    text-decoration: none;
    color: black;
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
  .uitloggen {
    text-decoration: none;
    color: black;
  }
  .card-img {
    width: 250px;
    height: 300px;
    border-radius: 20px;
  }

  .uitloggen {
    text-decoration: none;
  }
  .card-user {
    width: 300px;
    height: 170px;
    border-radius: 20px;
  }

  .aanpassen {
    font-family: Quicksand-Bold;
  }
  .top-bar {
    display: flex;
    justify-content: space-between;
    height: 10%;
  }

  .img {
    object-fit: cover;
    width: 100%;
    height: 100%;
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
}
</style>
