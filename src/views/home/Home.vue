<template>
  <Layout>
    <template #content>
      <Container class="py-10">
        <Hero />
        <FilterBar />
        <AnimeList />
      </Container>
    </template>
  </Layout>
</template>

<script lang="ts">
export default {
  name: 'Home',
};
</script>

