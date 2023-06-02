<template>
  <div class="container">
    <div class="top-bar">
      <v-icon class="mt-10 ml-10" size="30" icon="fas fa-arrow-left" />
      <h1 class="title mt-8" style="font-size: 35px">Post Date</h1>
    </div>
    <v-flex class="flex mt-10">
      <v-card class="card" width="350" height="700">
        <div class="naam-container">
          <v-card-title>Naam date:</v-card-title>
          <v-text-field class="textfield" label="Naam Date" variant="solo"></v-text-field>
          <v-card-title>Meer info</v-card-title>
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
          <v-card-title>Beschrijving</v-card-title>
          <v-textarea placeholder="Type hier..." rows="4" variant="solo"></v-textarea>
          <v-btn class="btn" width="175" height="40" color="#f9cd52" rounded>Post</v-btn>
        </div>
      </v-card>
    </v-flex>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selectedDate: null,
      selectedTime: null,
      dates: ['Ma 12 jun', 'Di 13 jun', 'Woe 14 jun', 'Do 15 jun', 'Vr 16 jun'],
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
        'Etten-Leur',
        'Rotterdam',
        'Zaltbommel',
        'Drunen',
        'Vught',
        'Boxtel',
        'Schijndel',
        'Hilvarenbeek',
        'Baarle-Nassau',
        'Bavel',
        'Oosterhout'
      ]
    }
  },
  computed: {
    time() {
      const timeArray = []
      for (let hour = 0; hour <= 24; hour++) {
        const formattedHour = hour.toString().padStart(2, '0')
        timeArray.push(`${formattedHour}:00`)
      }
      return timeArray
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

.top-bar {
  display: flex;

  height: 10%;
}

.btn {
  border: 1px solid black;
}
.title {
  margin-left: 70px;
}

.flex {
  display: flex;
  justify-content: center;
}

.card {
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
</style>
