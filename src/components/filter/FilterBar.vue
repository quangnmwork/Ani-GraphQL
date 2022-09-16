<template>
  <Container>
    <form class="grid grid-cols-[auto_42px] items-end">
      <div class="grid grid-cols-[repeat(6,170px)] gap-[24px]">
        <FormInput
          label="Search"
          :icon="SearchIcon"
          iconPosition="left"
        />
        <FormSelect
          label="Genres"
          :icon="ArrowDown"
          placeholder="any"
          :recommendList="[
            { title: 'Genres', list: genres.genres },
            { title: 'Tags', list: genres.tags, keyItem: 'name' },
          ]"
        />
        <FormSelect
          label="Years"
          :icon="ArrowDown"
          placeholder="any"
          :recommendList="[{ list: yearsCategory }]"
        />
        <FormSelect
          label="Season"
          :icon="ArrowDown"
          placeholder="any"
          :recommendList="[{ list: SEASON }]"
        />
        <FormSelect
          label="Format"
          :icon="ArrowDown"
          placeholder="any"
          :recommendList="[{ list: FORMAT }]"
        />
        <FormSelect
          label="Airing Status"
          :icon="ArrowDown"
          placeholder="any"
          :recommendList="[{ list: AIRING_STATUS }]"
        />
      </div>
      <div class="w-[38px]">
        <button class="bg-white p-2 font-semibold w-full flex justify-center rounded-r-md">
          <component
            :is="FilterIcon"
            class="text-input fill-current w-5 h-5 hover:text-main transition-colors inline-block"
          ></component>
        </button>
      </div>
    </form>
  </Container>
</template>

<script setup lang="ts">
import SearchIcon from '~/icons/SearchIcon.vue';
import ArrowDown from '~/icons/ArrowDown.vue';
import FilterIcon from '~/icons/FilterIcon.vue';
import { useQuery } from '@vue/apollo-composable';
import { GET_ALL_GENRES } from '~/graphQL/category';
import { FROM_YEAR, SEASON, FORMAT, AIRING_STATUS } from '~/constant/shared';

import _ from 'lodash';

const { result } = useQuery(GET_ALL_GENRES);
const currentYear = new Date().getFullYear();
const genres = reactive({ genres: [], tags: [] });

const yearsCategory = Array.from({ length: currentYear - FROM_YEAR + 2 }, (_, i) => FROM_YEAR + i);

watch(result, () => {
  genres.genres = result.value.genres;
  genres.tags = result.value.tags;
});
</script>
