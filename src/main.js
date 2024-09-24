import "./assets/tailwind.css";

import { createApp } from "vue";
import App from "./App.vue";

import icon from "./components/shared/icon.vue";

import router from "./router";


createApp(App).component('icon', icon).use(router).mount('#app');