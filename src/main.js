import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import Uploader from 'vue-media-upload'

// Vuetify
import 'vuetify/dist/vuetify.min.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives
})

const app = createApp(App)
// app.component('Uploader', Uploader)
app.use(vuetify)
app.use(router)

app.mount('#app')
