import { createApp } from 'vue';
import App from '~/App.vue';
import index from './router';

import { createPinia } from 'pinia';

import '~/styles/tailwind.css';

const app = createApp(App);

app.use(createPinia());

app.use(index);

app.mount('#app');

