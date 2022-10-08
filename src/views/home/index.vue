<template>
  <Navigation />

  <div class="bg-layout">
    <Hero />
    <FilterBar />
    <Container class="mt-10"><LandingSection :section-name="'Trending Now'" /></Container>
  </div>
</template>

<script setup lang="ts"></script>
<script>
export default {
  name: 'Home',
};
</script>
<style scoped></style>
