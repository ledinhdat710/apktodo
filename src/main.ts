import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
library.add(fas);
library.add(fab);
library.add(far);
dom.watch();
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(pinia)
app.use(router)

app.mount('#app')
