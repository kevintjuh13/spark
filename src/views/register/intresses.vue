<template>
  <div class="container">
    <v-progress-linear model-value="75"></v-progress-linear>
    <div class="mt-16 sub-container">
      <h1 class="mb-2 title">INTRESSES</h1>
      <h5 class="mb-5 sub-title">Kies hier uit maximaal 5 interesses!</h5>
      <div class="chips-container">
        <v-chip-group class="chips-sub-container" column multiple>
          <v-chip
            v-for="optie in opties"
            :key="optie.id"
            :disabled="isDisabled(optie)"
            variant="outlined"
            class="mb-4 ml-1 chips"
            :selected="isSelected(optie)"
            @click="toggleOption(optie)"
          >
            {{ optie.optie }}
          </v-chip>
        </v-chip-group>
        <p v-if="showError" class="error-message">
          Maximaal 5 interesses kunnen worden geselecteerd.
        </p>
      </div>
    </div>
    <div class="registratie-knop">
      <myButton
        class="mr-2"
        style="background-color: black; color: white; font-size: 30px"
        type="submit"
        icon
        buttonText=">"
        @click="submitInterests"
      ></myButton>
    </div>
  </div>
</template>

<script>
import myButton from '../../components/button.vue'
import { fetchOpties, updateUserData } from '../../data.js'

export default {
  components: {
    myButton
  },
  data() {
    return {
      opties: [],
      selectedOptions: [],
      showError: false
    }
  },

  mounted() {
    this.fetchOpties()
  },

  methods: {
    isSelected(optie) {
      return this.selectedOptions.includes(optie.optie)
    },

    isDisabled(optie) {
      return !this.isSelected(optie) && this.selectedOptions.length >= 5
    },

    toggleOption(optie) {
      if (this.isSelected(optie)) {
        // Deselect the option
        this.selectedOptions = this.selectedOptions.filter((selected) => selected !== optie.optie)
      } else {
        // Check if the maximum limit has been reached
        if (this.selectedOptions.length < 5) {
          // Select the option
          this.selectedOptions.push(optie.optie)
        } else {
          this.showError = true
        }
      }

      console.log('Selected chips:', this.selectedOptions)
    },

    fetchOpties() {
      fetchOpties()
        .then((data) => {
          this.opties = data
        })
        .catch((error) => {
          console.error(error)
        })
    },

    submitInterests() {
      if (this.selectedOptions.length > 0) {
        const id = this.$route.query.id
        const name = this.$route.query.name
        const age = this.$route.query.age
        const gender = this.$route.query.gender
        const show = this.$route.query.show

        const user = {
          id: id,
          name: name,
          age: age,
          gender: gender,
          show: show,

          interest: this.selectedOptions.join(', ')
        }

        updateUserData(user)
          .then((response) => {
            console.log('User interests updated:', response)
            // Navigate to the home page and pass the user data as query parameters
            this.$router.push({
              name: 'foto',
              query: user
            })
          })
          .catch((error) => {
            console.error('Error updating user interests:', error)
            // Handle the error as needed
          })
      }
    }
  }
}
</script>

<style scoped>
@media only screen and (min-width: 768px) {
  .container {
    font-family: Quicksand-Bold;
    height: 100vh;
    background-color: #f9cd52;
  }
  .registratie-knop {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    height: 38%;
  }
  .sub-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .title {
    font-size: 50px;
  }
  .sub-title {
    font-size: 20px;
  }
  .chips-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .chips-sub-container {
    display: flex;
    justify-content: center;
  }

  .chip {
    margin-right: 10px;
    margin-bottom: 10px;
  }

  .error-message {
    color: red;
    margin-top: 10px;
  }
}
@media only screen and (max-width: 450px) {
  .container {
    font-family: Quicksand-Bold;
    height: 100vh;
    background-color: #f9cd52;
  }
  .registratie-knop {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    height: 35%;
  }
  .sub-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .textField {
    width: 220px;
  }
  .title {
    font-size: 30px;
  }
  .sub-title {
    font-size: 14px;
  }
  .chips-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .chips-sub-container {
    display: flex;
    justify-content: center;
  }

  .chip {
    margin-right: 10px;
    margin-bottom: 10px;
  }

  .error-message {
    color: red;
    margin-top: 10px;
  }
}
/* Add additional styles as needed */
</style>
