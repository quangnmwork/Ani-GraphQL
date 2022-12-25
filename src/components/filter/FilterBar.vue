<template>
  <form
    class="relative z-[700] mt-20 grid grid-cols-[auto_42px] items-center"
    autocomplete="off"
  >
    <div class="grid grid-cols-[auto_42px] gap-[24px] lg:grid-cols-[repeat(5,170px)]">
      <FormInput
        v-model="email"
        label="Search"
        class="w-full lg:w-auto"
        state="search"
        @input="(e:any) =>{ onInput(e.target.value,'search')}"
      >
        <template #icon><SearchIcon /></template>
      </FormInput>
      <FormSelect
        v-for="(select, index) in formSelectList.slice(0, 4)"
        :key="index"
        :label="select.label"
        :placeholder="select.placeholder"
        class="hidden lg:block"
        :recommend-list="select.recommendList"
        @select="(e:any) =>{ onInput(e,select.id)}"
      >
        <template #icon><ArrowDown /></template>
      </FormSelect>
    </div>
    <div class="relative">
      <button
        class="mt-10 flex w-full justify-center rounded-r-md bg-white p-2 font-semibold"
        @click.prevent="
          () => {
            isDropdown = !isDropdown;
          }
        "
      >
        <FilterIcon
          class="inline-block h-10 w-10 fill-current text-input transition-colors hover:text-main"
        />
      </button>
      <template v-if="isLargeScreen && isDropdown">
        <div
          class="absolute top-full right-0 z-50 mt-5 min-w-max whitespace-nowrap rounded-sm border-red-300 bg-white p-5 drop-shadow-lg transition delay-200"
        >
          <div class="flex flex-wrap gap-4">
            <FormSelect
              v-for="(select, index) in formSelectList.slice(4, 7)"
              :key="index"
              :label="select.label"
              variant="solid"
              :placeholder="select.placeholder"
              class="hidden lg:block"
              :recommend-list="select.recommendList"
              @select="(e:any) =>{ onInput(e,select.id)}"
            >
              <template #icon><ArrowDown /></template>
            </FormSelect>
          </div>
          <div class="mt-4 mr-[100px] grid grid-cols-[repeat(3,180px)] gap-10">
            <FormRange
              v-for="(range, index) in formRangeList"
              :key="index"
              class="inline-block"
              :is-range="range.isRange"
              :min="range.min"
              :max="range.max"
              :range-value="[range.min, range.max]"
              :label="range.label"
              @change="(e:any) => {onRangeChange(e,range.id)}"
            />
          </div>
        </div>
      </template>
    </div>
    <template v-if="!isLargeScreen && isDropdown">
      <div
        class="relative mt-10 grid snap-x snap-proximity scroll-p-10 auto-cols-[150px] grid-flow-col items-center gap-x-10 overflow-x-auto"
      >
        <FormSelect
          v-for="(select, index) in formSelectList"
          :key="index"
          :label="select.label"
          :placeholder="select.placeholder"
          :recommend-list="select.recommendList"
          @select="(e:any) =>{ onInput(e,select.id)}"
        >
          <template #icon><ArrowDown /></template>
        </FormSelect>
      </div>
    </template>
  </form>
  <div
    name="search-list"
    class="mt-8 flex"
  >
    <TagIcon class="h-8 w-8" />
    <a-tag
      v-for="(item, id) in Object.keys(filterBarState).filter((key) =>
        key.includes('$') || key.includes('_') ? false : true
      )"
      :key="id"
      color="#3db4f2"
      class="flex items-center gap-3"
    >
      <span class="order-1">
        {{ formatTags(filterBarState[item as keyof FilterBarState], item as keyof FilterBarState) }}
      </span>
      <template #icon>
        <CloseIcon
          class="order-2 cursor-pointer fill-white"
          @click=" () => {
            delete filterBarState[item as keyof FilterBarState];
          }"
        />
      </template>
    </a-tag>
  </div>
</template>

<script setup lang="ts">
import SearchIcon from '~/icons/SearchIcon.vue';
import ArrowDown from '~/icons/ArrowDown.vue';
import FilterIcon from '~/icons/FilterIcon.vue';
import { useQuery } from '@vue/apollo-composable';
import { GET_ALL_GENRES } from '~/graphQL/category';
import { YEAR_CATEGORY, SEASON, FORMAT, AIRING_STATUS, COUNTRY } from '~/constant/shared';

import _ from 'lodash';
import { FilterBarState, formatTags, useFilterBar } from '~/pinia/useFilterBar';

const { result } = useQuery(GET_ALL_GENRES, { type: 'ANIME' });
const isLargeScreen = useMediaQuery('(min-width: 1240px)');
const filterBarState = useFilterBar();

const isDropdown = ref(false);
const email = ref('');

const onInput = (value: any, state: string) => {
  if (value) filterBarState[state as keyof FilterBarState] = value;
  else {
    delete filterBarState[state as keyof FilterBarState];
  }
};

const onRangeChange = (value: any, state: string) => {
  if (value) filterBarState[state as keyof FilterBarState] = value;
  else {
    delete filterBarState[state as keyof FilterBarState];
  }
};

const formRangeList = [
  {
    isRange: true,
    min: 1,
    max: 150,
    id: 'episodes',
    label: 'Episodes',
  },
  {
    isRange: true,
    min: 1,
    max: 170,
    id: 'duration',
    label: 'Duration',
  },
  {
    isRange: true,
    min: +YEAR_CATEGORY[0],
    max: +YEAR_CATEGORY[YEAR_CATEGORY.length - 1],
    label: 'Year Range',
    id: 'yearRange',
  },
];

const formSelectList = ref([
  {
    label: 'Genres',
    placeholder: 'any',
    id: 'genres',
    recommendList: [
      { title: 'Genres', list: [] },
      { title: 'Tags', list: [], keyItem: 'name' },
    ],
  },
  {
    label: 'Years',
    placeholder: 'any',
    id: 'years',
    recommendList: [{ list: YEAR_CATEGORY }],
  },
  {
    label: 'Season',
    placeholder: 'any',
    id: 'season',
    recommendList: [{ list: SEASON }],
  },
  {
    label: 'Format',
    placeholder: 'any',
    id: 'format',
    recommendList: [{ list: FORMAT }],
  },
  {
    label: 'Airing status',
    placeholder: 'any',
    id: 'airing',
    recommendList: [{ list: AIRING_STATUS }],
  },
  {
    label: 'Country',
    placeholder: 'any',
    id: 'country',
    recommendList: [{ list: COUNTRY }],
  },
  {
    label: 'Streaming On',
    placeholder: 'any',
    id: 'stream',
    recommendList: [{ list: [], keyItem: 'site' }],
  },
]);

watch(result, () => {
  formSelectList.value[0].recommendList[0].list = result.value.genres;
  formSelectList.value[0].recommendList[1].list = result.value.tags;
  formSelectList.value[6].recommendList[0].list = result.value.externalLink;
});
</script>
