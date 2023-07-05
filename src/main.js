import { createApp } from 'vue'
import './styles/main.scss'
import App from './App.vue'
import togglePopup from './scripts/togglePopup';

createApp(App).mount('#app')

togglePopup();
