import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import * as Vue from 'vue/dist/vue.esm-bundler';
window.Vue = Vue;

createApp(App).use(router).mount('#app');
