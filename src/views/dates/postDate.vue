<template>
  <div class="container">
    <div class="top-bar">
      <v-icon class="mt-10 ml-10" size="30" icon="fas fa-arrow-left" @click="goBack" />
      <h1 class="title mt-8" style="font-size: 35px">Post Date</h1>
    </div>
    <v-flex class="flex mt-10">
      <v-card class="card">
        <div class="naam-container">
          <v-card-title class="title-text">Naam date:</v-card-title>
          <v-text-field
            v-model="naamDate"
            class="textfield"
            label="Naam Date"
            variant="solo"
          ></v-text-field>
          <v-card-title class="title-text">Meer info</v-card-title>
          <v-row class="mt-2">
            <v-icon class="mr-5 mt-5" color="#f9cd52" icon="fas fa-calendar" size="20"></v-icon>
            <v-select
              label="Datum"
              class="mr-10 textfield"
              v-model="selectedDate"
              :items="dates"
              variant="solo"
            ></v-select>
          </v-row>
          <v-row class="mt-2">
            <v-icon class="mr-5 mt-5" color="#f9cd52" icon="fas fa-clock" size="20"></v-icon>
            <v-select
              label="Tijd"
              class="mr-10 textfield"
              v-model="selectedTime"
              :items="time"
              variant="solo"
            ></v-select>
          </v-row>
          <v-row class="mt-2">
            <v-icon class="mr-5 mt-5" color="#f9cd52" icon="fas fa-location-dot" size="20"></v-icon>
            <v-autocomplete
              label="Plaats"
              class="mr-10 textfield"
              v-model="selectedLocation"
              :items="locations"
              variant="solo"
            ></v-autocomplete>
          </v-row>

          <router-link to="/homePage">
            <v-btn
              @click="postDate"
              class="btn mt-16"
              width="175"
              height="40"
              color="#f9cd52"
              rounded
              >Post</v-btn
            >
          </router-link>
        </div>
      </v-card>
    </v-flex>
  </div>
</template>

<script>
import { addDate } from '../../data.js'

export default {
  data() {
    return {
      user: {
        id: null,
        name: '',
        age: '',
        gender: '',
        show: '',
        interest: '',
        pictureURL: ''
      },
      naamDate: '',
      selectedDate: null,
      selectedTime: null,
      dates: ['Ma 26 jun', 'Di 27 jun', 'Woe 28 jun', 'Do 29 jun', 'Vr 30 jun'],
      locations: [
        'Tilburg',
        'Breda',
        "s'Hertogenbosch",
        'Eindhoven',
        'Kaatsheuvel',
        'Waalwijk',
        'Loon op Zand',
        'Oisterwijk',
        'Best',
        'Veldhoven',
        'Dongen',
        'Gilze-Rijen',
        'Dorst',
        'Roosendaal',
        'Goirle',
        'Den Haag',
        'Amsterdam',
        'Rotterdam',
        'Utrecht',
        'Maastricht'
      ],
      beschrijvingDate: ''
    }
  },
  computed: {
    time() {
      // loopt door alle tijden heen
      const timeArray = []
      for (let hour = 0; hour <= 24; hour++) {
        const formattedHour = hour.toString().padStart(2, '0')
        timeArray.push(`${formattedHour}:00`)
      }
      return timeArray
    }
  },
  created() {
    this.userId = this.$route.query.userId
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
    // stuurt de user terug naar de home pagina met alle data hieronder weegeven
    goBack() {
      const { id, name, age, gender, interest, show, pictureURL } = this.user

      this.$router.push({
        name: 'homePage',
        query: { id, name, age, gender, interest: interest, show, pictureURL }
      })
    },
    async postDate() {
      // creert een date en stuurt die naar de dates table in de database
      const date = {
        userId: this.user.id,
        naamDate: this.naamDate,
        datumDate: this.selectedDate,
        tijdDate: this.selectedTime,
        locatieDate: this.selectedLocation,
        beschrijvingDate: this.beschrijvingDate
      }
      try {
        const savedDate = await addDate(date)
        console.log('Date saved: ', savedDate)

        const { id, name, age, gender, interest, show, pictureURL } = this.user
        this.$router.push({
          name: 'homePage',
          query: { id, name, age, gender, interest: interest, show, pictureURL }
        })
      } catch (error) {
        console.error('Error posting date: ', error)
      }
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

  .top-bar {
    display: flex;

    height: 10%;
  }

  .btn {
    border: 1px solid black;
  }
  .title {
    margin-left: 230px;
  }
  .title-text {
    font-size: 25px;
  }
  .flex {
    display: flex;
    justify-content: center;
  }

  .card {
    width: 400px;
    height: 600px;
    border-radius: 20px;
  }

  .naam-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .textfield {
    width: 240px;
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

  .top-bar {
    display: flex;

    height: 10%;
  }

  .btn {
    border: 1px solid black;
  }
  .title {
    margin-left: 65px;
  }

  .flex {
    display: flex;
    justify-content: center;
  }

  .card {
    width: 350px;
    height: 550px;
    border-radius: 20px;
  }

  .naam-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .textfield {
    width: 200px;
  }
}
</style>
