<template>
  <Layout>
    <template #content>
      <Container class="py-10">
        <Hero />
        <FilterBar />
        <AnimeListHome />
      </Container>
    </template>
  </Layout>
</template>

<script lang="ts">
import { useRoute } from 'vue-router';

const route  = useRoute()

export default {
  name: 'Home',
};
</script>
