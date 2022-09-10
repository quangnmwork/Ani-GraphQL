<template>
  <Container>
    <form class="flex gap-10 py-20">
      <FormInput
        label="Search"
        :icon="SearchIcon"
        iconPosition="left"
      />
      <FormInput
        label="Category"
        :icon="ArrowDown"
        placeholder="any"
      />
      <FormInput
        label="Genres"
        :icon="ArrowDown"
        placeholder="any"
      />
      <FormInput
        label="Years"
        :icon="ArrowDown"
        placeholder="any"
        :recommendList="recommendList"
      />
      <FormInput
        label="Format"
        :icon="ArrowDown"
        placeholder="any"
      />
    </form>
  </Container>
</template>

<script setup lang="ts">
import SearchIcon from '~/icons/SearchIcon.vue';
import ArrowDown from '~/icons/ArrowDown.vue';

const recommendList = [2023, 2021, 2022];
</script>
