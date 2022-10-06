<template>
  <Container>
    <form class="grid grid-cols-[auto_42px] items-end">
      <div class="grid grid-cols-[repeat(6,170px)] gap-[24px]">
        <FormInput
          label="Search"
          :icon="SearchIcon"
        />
        <FormSelect
          label="Genres"
          :icon="ArrowDown"
          placeholder="any"
          :recommend-list="[
            { title: 'Genres', list: genres.genres },
            { title: 'Tags', list: genres.tags, keyItem: 'name' },
          ]"
        />
        <FormSelect
          label="Years"
          :icon="ArrowDown"
          placeholder="any"
          :recommend-list="[{ list: YEAR_CATEGORY }]"
        />
        <FormSelect
          label="Season"
          :icon="ArrowDown"
          placeholder="any"
          :recommend-list="[{ list: SEASON }]"
        />
        <FormSelect
          label="Format"
          :icon="ArrowDown"
          placeholder="any"
          :recommend-list="[{ list: FORMAT }]"
        />
      </div>
      <div class="relative w-[38px]">
        <button class="flex w-full justify-center rounded-r-md bg-white p-2 font-semibold">
          <component
            :is="FilterIcon"
            class="inline-block h-5 w-5 fill-current text-input transition-colors hover:text-main"
          ></component>
        </button>
        <div
          class="absolute top-full right-0 mt-5 min-w-max rounded-sm border-red-300 bg-white p-5 drop-shadow-lg"
        >
          <div class="flex flex-wrap gap-4">
            <FormSelect
              label="Airing Status"
              :icon="ArrowDown"
              variant="solid"
              placeholder="any"
              :recommend-list="[{ list: AIRING_STATUS }]"
            />
            <FormSelect
              label="Country"
              :icon="ArrowDown"
              variant="solid"
              placeholder="any"
              :recommend-list="[{ list: AIRING_STATUS }]"
            />
            <FormSelect
              label="Streaming On"
              :icon="ArrowDown"
              variant="solid"
              placeholder="any"
              :recommend-list="[{ list: AIRING_STATUS }]"
            />
          </div>
          <div class="mt-4 mr-[100px] grid grid-cols-[repeat(3,180px)] gap-10">
            <FormRange
              class="inline-block"
              :is-range="true"
              :min="+YEAR_CATEGORY[0]"
              :max="+YEAR_CATEGORY[YEAR_CATEGORY.length - 1]"
              :range-value="[+YEAR_CATEGORY[0], +YEAR_CATEGORY[YEAR_CATEGORY.length - 1]]"
              label="Year Range"
            />
            <FormRange
              :is-range="true"
              :min="1"
              :max="150"
              :range-value="[1, 150]"
              label="Episodes"
            />
            <FormRange
              :is-range="true"
              :min="1"
              :max="170"
              :range-value="[1, 170]"
              label="Duration"
            />
          </div>
          <a-checkbox
            v-model:checked="isDoujin"
            class="mt-3"
          >
            Doujin
          </a-checkbox>
        </div>
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
import { YEAR_CATEGORY, SEASON, FORMAT, AIRING_STATUS } from '~/constant/shared';

import _ from 'lodash';

const { result } = useQuery(GET_ALL_GENRES);
const isDoujin = ref(false);

const genres = reactive({ genres: [], tags: [] });

watch(result, () => {
  genres.genres = result.value.genres;
  genres.tags = result.value.tags;
});
</script>
