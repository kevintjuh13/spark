import { createApp } from 'vue'
import App from './App.vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives
})

import './assets/main.css'
const app = createApp(App)
createApp(App).mount('#app')
createApp(App).use(vuetify).mount('#app')

app.use(router)

app.mount('#app')
