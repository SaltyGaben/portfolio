import { createApp } from 'vue'
import './index.css'
import App from './App.vue'
import { MotionPlugin } from 'motion-v'

createApp(App).use(MotionPlugin).mount('#app')
