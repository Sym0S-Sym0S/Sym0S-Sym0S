/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'
import './index.css'

// Components
import { createPinia } from 'pinia'
import App from './App.vue'

// Composables
import { createApp } from 'vue'

const app = createApp(App)

app.use(createPinia())

registerPlugins(app)

app.mount('#app')
