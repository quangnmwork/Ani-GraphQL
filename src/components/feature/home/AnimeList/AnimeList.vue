<template>
  <AnimeListHome v-show="!isHaveFilter" />
  <AnimeListSearch v-show="isHaveFilter" />
</template>
<script setup lang="ts">
import { useFilterBar } from '~/pinia';

const filterBarState = useFilterBar();
const isHaveFilter = ref(false);

watch(filterBarState, () => {
  const checkIsHaveFilter = () => {
    if (
      filterBarState.search ||
      filterBarState.country ||
      filterBarState.episodes ||
      filterBarState.years ||
      filterBarState.airing ||
      filterBarState.duration ||
      filterBarState.genres ||
      filterBarState.stream ||
      filterBarState.yearRange ||
      filterBarState.season ||
      filterBarState.format
    )
      return true;
    return false;
  };
  isHaveFilter.value = checkIsHaveFilter();
});
</script>

