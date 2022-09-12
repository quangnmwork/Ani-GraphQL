import { createApp, h } from 'vue';
import App from '~/App.vue';
import graphQLProvider from './graphQL';
import index from './router';

import { createPinia } from 'pinia';

import '~/styles/tailwind.css';
import { DefaultApolloClient } from '@vue/apollo-composable';

const app = createApp({
  setup() {
    provide(DefaultApolloClient, graphQLProvider);
  },
  render: () => h(App),
});

app.use(createPinia());

app.use(index);

app.mount('#app');

