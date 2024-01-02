import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import store from './store/store.ts'

console.log("Hey! :)")

createApp(App)
    .use(store)
    .mount('#app')
