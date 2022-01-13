import { createApp } from 'vue'
import App from './App.vue'

import Header from './components/Header.vue'


const app = createApp(App)

app.component('header-component', Header)
app.mount('#app')
