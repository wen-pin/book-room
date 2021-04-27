import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VCalendar from 'v-calendar'

createApp(App)
    .use(router)
    .use(VCalendar, {})
    .mount('#app')




