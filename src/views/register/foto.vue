<template>
  <div class="container">
    <v-progress-linear model-value="100"></v-progress-linear>
    <div class="mt-16 sub-container">
      <h1 class="mb-2 title">FOTO'S</h1>
      <h5 class="mb-5 sub-title">Voeg 2 foto's toe</h5>
      <input class="test" type="file" name="picture" ref="fileInput" @change="handleFileChange" />
    </div>
    <div class="registratie-knop">
      <myButton
        class="mr-2"
        style="background-color: black; color: white; font-size: 30px"
        type="submit"
        icon
        buttonText=">"
        @click="submit"
      ></myButton>
    </div>
  </div>
</template>

<script>
import myButton from '../../components/button.vue'
import { updateUserData, getImageURL } from '../../data.js'

export default {
  components: { myButton },
  data() {
    return {
      selectedPicture: null
    }
  },
  methods: {
    handleFileChange(event) {
      console.log('File selected:', event.target.files[0])
      this.selectedPicture = event.target.files[0]
    },
    mounted() {
      // pakt de parameters van de query
      const id = this.$route.query.id
      const name = this.$route.query.name
      const age = this.$route.query.age
      const gender = this.$route.query.gender
      const show = this.$route.query.show
      const interest = this.$route.query.interest

      console.log('ID:', id)
      console.log('Name:', name)
      console.log('Age:', age)
      console.log('Gender:', gender)
      console.log('Show:', show)
      console.log('Interest:', interest)
    },
    // haalt de data op van de vorige pagina en stuurt dit door naar de homepagina als 1 geheel
    async submit() {
      console.log('Picture before update:', this.selectedPicture)

      const id = this.$route.query.id
      const formData = new FormData()
      formData.append('picture', this.selectedPicture, this.selectedPicture.name)
      const picture = formData.get('picture')

      const user = {
        id: id,
        name: this.$route.query.name,
        age: this.$route.query.age,
        gender: this.$route.query.gender,
        show: this.$route.query.show,
        interest: this.$route.query.interest,
        picture: picture
      }

      try {
        const updatedUser = await updateUserData(user)
        console.log('User updated:', updatedUser)
        const pictureURL = getImageURL(updatedUser.picture)
        console.log('Picture URL:', pictureURL)

        this.$router.push({
          path: '/homePage',
          query: {
            name: user.name,
            id: user.id,
            age: user.age,
            gender: user.gender,
            show: user.show,
            interest: user.interest,
            picture: user.picture,
            pictureURL: pictureURL
          }
        })
      } catch (error) {
        console.error('Error updating user:', error)
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
    height: 60%;
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
  .test {
    width: 300px;
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
    height: 65%;
  }
  .sub-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .title {
    font-size: 30px;
  }
  .sub-title {
    font-size: 14px;
  }
  .test {
    width: 300px;
  }
}
</style>
