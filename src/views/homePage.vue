<template>
  <div class="container">
    <div class="top-bar">
      <v-icon class="mt-10 ml-10" size="30" icon="fas fa-search" @click="toggleSearch" />
      <h1 class="ml-5 mt-8" style="font-size: 35px">Dates</h1>
      <router-link class="mt-8 mr-10" :to="{ name: 'myProfile', query: userData }">
        <v-avatar color="surface-variant" size="45">
          <img class="avatar-img" :src="userData.pictureURL" alt="Profile Picture" />
        </v-avatar>
      </router-link>
    </div>
    <div class="searchBar" :class="{ active: showSearchBar }">
      <input
        style="border: none; outline: none"
        type="text"
        placeholder="Search"
        v-model="searchText"
      />
    </div>
    <v-row class="mt-10 content">
      <v-col
        class="sub-content"
        cols="12"
        sm="6"
        md="6"
        lg="4"
        v-for="date in filteredDates"
        :key="date.id"
      >
        <v-card width="350" height="250" class="card">
          <!-- Update the content of the card with the corresponding properties from the 'date' object -->
          <div class="avatar-container">
            <v-avatar class="mt-5" color="surface-variant" size="75">
              <img class="avatar-img" :src="getImageURL(date.user.picture)" alt="" />
            </v-avatar>

            <v-card-title>{{ date.user.name }}, {{ date.user.age }}</v-card-title>
            <v-card-text style="font-size: 20px">{{ date.name }}</v-card-text>
          </div>
          <div class="card-footer">
            <v-card-subtitle class="mt-6">{{ date.date }}</v-card-subtitle>

            <v-btn class="button mr-4 mt-5" rounded @click="openDialog(date)">Details</v-btn>
          </div>

          <!-- Add the v-dialog component here -->
          <v-dialog v-model="date.dialogVisible" max-width="400">
            <v-flex class="d-flex justify-center align-center mt-10">
              <v-card width="350" height="550" class="dialog-card">
                <div class="icon-xmark">
                  <v-icon
                    color="#f9cd52"
                    class="mt-4"
                    size="30"
                    icon="fas fa-xmark"
                    @click="closeDialog(date)"
                  ></v-icon>
                </div>
                <v-card-text class="text-center">
                  <v-avatar color="black" size="80">
                    <img
                      class="avatar-img"
                      :src="getImageURL(date.user.picture)"
                      alt="Profile Picture"
                    />
                  </v-avatar>
                </v-card-text>
                <v-card-title class="text-center">{{ date.user.name }}</v-card-title>
                <v-card-title class="text-center">{{ date.user.age }}</v-card-title>
                <v-card-title class="text-center">{{ date.name }}</v-card-title>
                <v-flex class="sub-container">
                  <v-row class="mx-2 my-1">
                    <v-icon class="ml-10 mt-8" color="#f9cd52" icon="fas fa-calendar"></v-icon>
                    <v-card-title class="mt-5">{{ date.date }}</v-card-title>
                  </v-row>
                  <v-row class="mx-2 my-1">
                    <v-icon class="ml-10 mt-8" color="#f9cd52" icon="fas fa-clock"></v-icon>
                    <v-card-title class="mt-5">{{ date.time }}</v-card-title>
                  </v-row>
                  <v-row class="mx-2 my-1">
                    <v-icon class="ml-10 mt-8" color="#f9cd52" icon="fas fa-location-dot"></v-icon>
                    <v-card-title class="mt-5">{{ date.location }}</v-card-title>
                  </v-row>
                  <v-card-title class="text-center">
                    <v-btn
                      style="border: 1px solid black"
                      width="175"
                      height="40"
                      color="#f9cd52"
                      rounded
                      disabled="true"
                      >Aanmelden</v-btn
                    >
                  </v-card-title>
                </v-flex>
              </v-card>
            </v-flex>
          </v-dialog>
          <v-row>
            <v-card-subtitle class="ml-5 mt-2">{{ date.time }}</v-card-subtitle>
            <v-card-subtitle class="ml-5">{{ date.location }}</v-card-subtitle>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

    <div class="navbar-container">
      <div class="flex">
        <v-card class="mb-10 border" width="300" height="40">
          <router-link class="link" to="/chosen">
            <v-icon class="ml-7" size="25" icon="fas fa-check"></v-icon>
          </router-link>
          <router-link class="link" to="/awaiting">
            <v-icon class="ml-6" size="25" icon="fas fa-clock"></v-icon>
          </router-link>
          <router-link :to="{ name: 'postDate', query: userData }">
            <v-icon class="icon" size="25" icon="fas fa-circle-plus"></v-icon>
          </router-link>

          <v-icon class="ml-7" size="25" icon="fas fa-gear"></v-icon>
        </v-card>
        <v-avatar size="65" color="white" class="avatar">
          <v-icon icon="fas fa-home"></v-icon>
        </v-avatar>
      </div>
    </div>
  </div>
</template>

<script>
import { getDates, getImageURL } from '../data.js'

export default {
  data() {
    return {
      showSearchBar: false,
      dialogVisible: false,
      selectedOption: null,
      userData: {},
      dates: [],
      searchText: ''
    }
  },

  mounted() {
    this.userData = this.$route.query
    console.log('User Data:', this.userData)
    this.fetchDates()

    this.adjustContainerHeight()
    console.log('userData.pictureURL:', this.userData.pictureURL)
    // Toegevoegde console.log
  },

  computed: {
    // filterd de dates op naam. wanneer je op het zoekbalk icoontje klikt
    filteredDates() {
      if (this.userData.show === 'vrouw') {
        return this.dates.filter(
          (date) =>
            date.user.name.toLowerCase().includes(this.searchText.toLowerCase()) &&
            date.user.gender === 'vrouw'
        )
      } else {
        return this.dates.filter((date) =>
          date.user.name.toLowerCase().includes(this.searchText.toLowerCase())
        )
      }
    }
  },
  methods: {
    getImageURL(picture) {
      if (!picture) {
        return ''
      }
      return getImageURL(picture)
    },
    adjustContainerHeight() {
      const container = document.querySelector('.container')
      if (container.scrollHeight > container.clientHeight) {
        container.style.height = 'fit-content'
      } else {
        container.style.height = '100vh'
      }
    },
    // navigeert naar de dateInfo pagina
    navigateToDateInfo(dateId) {
      this.$router.push({ name: 'dateInfo', params: { dateId: dateId } })
    },

    // opent de pop-up
    openDialog(date) {
      date.dialogVisible = true
    },

    // sluit de pop-up
    closeDialog(date) {
      date.dialogVisible = false
    },
    // dit haalt de data uit de dates table zodat je het hier kan gebruiken
    fetchDates() {
      getDates()
        .then((dates) => {
          console.log(dates)
          this.dates = dates
        })
        .catch((error) => {
          console.error('Error fetching dates:', error)
        })
    },

    // zoekbalk openen en sluiten
    toggleSearch() {
      this.showSearchBar = !this.showSearchBar
    },
    //  navigeert naar de postDate pagina
    navigateToPostDate(userId) {
      this.$router.push({ name: 'postDate', query: { userId } })
    }
  }
}
</script>

<style scoped>
@media only screen and (min-width: 768px) {
  .container {
    position: relative;
    font-family: Quicksand-Bold;
    min-height: 100vh;
    background-color: #f9f6f6;
    max-width: 100vw;
    overflow-x: hidden;
    overflow-y: auto;
  }

  .icon-xmark {
    position: absolute;
    margin-left: 300px;
  }

  .searchBar {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 0;
    opacity: 0;
    width: 250px;
    transition: height 0.3s, opacity 0.3s;
    background-color: white;
    border-radius: 20px;
    padding: 5px;
    margin: 10px;
    margin-left: auto;
    margin-right: auto;
  }

  .filter {
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }
  .searchBar.active {
    height: 50px;
    opacity: 1;
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

  .dialog-card {
    border-radius: 20px;
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
  .navbar-container {
    position: fixed;
    bottom: 0;
    left: 45%;
    transform: translateX(-50%);
    z-index: 999; /* Adjust as needed */
  }
  .border {
    display: flex;
    align-items: center;

    border-radius: 20px;
    background-color: #f9cd52;
  }

  .link {
    text-decoration: none;
    color: black;
  }
  .flex {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin-left: 70px;
  }
  .avatar {
    position: absolute;
    border: 1px solid black;
    margin-bottom: 28px;
  }
  .icon {
    margin-left: 90px;
    color: black;
  }
}
@media only screen and (max-width: 450px) {
  .container {
    position: relative;
    font-family: Quicksand-Bold;
    min-height: 100vh; /* Set a minimum height of 100vh */
    background-color: #f9f6f6;
    max-width: 100vw;
    overflow-x: hidden;
    overflow-y: auto; /* Add vertical scrolling */
  }

  .icon-xmark {
    position: absolute;
    margin-left: 300px;
  }

  .searchBar {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 0;
    opacity: 0;
    width: 250px;
    transition: height 0.3s, opacity 0.3s;
    background-color: white;
    border-radius: 20px;
    padding: 5px;
    margin: 10px;
    margin-left: auto;
    margin-right: auto;
  }

  .filter {
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }
  .searchBar.active {
    height: 50px;
    opacity: 1;
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

  .dialog-card {
    border-radius: 20px;
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
  .navbar-container {
    position: fixed;
    bottom: 0;
    left: 42%;
    transform: translateX(-50%);
    z-index: 999; /* Adjust as needed */
  }
  .border {
    display: flex;
    align-items: center;

    border-radius: 20px;
    background-color: #f9cd52;
  }

  .link {
    text-decoration: none;
    color: black;
  }
  .flex {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin-left: 70px;
  }
  .avatar {
    position: absolute;
    border: 1px solid black;
    margin-bottom: 28px;
  }
  .icon {
    margin-left: 90px;
    color: black;
  }
}
</style>
