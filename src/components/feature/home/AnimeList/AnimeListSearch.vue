<template>
  <Spin :spinning="loading">
    <div
      ref="containerListRef"
      class="grid grid-cols-5 gap-4 py-4"
    >
      <AniCard
        v-for="(aniItem, id) in result?.Page.media"
        :key="id"
        :ani="aniItem"
      />
    </div>
  </Spin>
</template>
<script lang="ts" setup>
import { useQuery } from '@vue/apollo-composable';
import { SEARCH_ANIME } from '~/graphQL/search';
import { Spin } from 'ant-design-vue';

const filterBarState = useFilterBar();

interface ISearchAnimeResult {
  page: number;
  id?: number;
  type?: number;
  isAdult: boolean;
  search: string;
  format: string;
  status: string;
  countryOfOrigin: number;
  genres: string;
  sort: 'POPULARITY_DESC' | 'SCORE_DESC';
  season: string;
  source: string;
  onList: boolean;
  seasonYear: number;
  yearLesser: number;
  yearGreater: number;
  episodeLesser: number;
  episodeGreater: number;
  durationLesser: number;
  durationGreater: number;
  year: number;
  licensedBy: string;
  isLicensed: boolean;
}

const containerListRef = ref<HTMLDivElement>();
const currentPage = ref(1);

const { result, refetch, loading, fetchMore } = useQuery<any, Partial<ISearchAnimeResult>>(
  SEARCH_ANIME,
  {
    page: 1,
    search: filterBarState.search,
    genres: filterBarState.genres,
    yearGreater: filterBarState.yearRange?.min,
    yearLesser: filterBarState.yearRange?.max,
    episodeLesser: filterBarState.episodes?.max,
    episodeGreater: filterBarState.episodes?.min,
    durationLesser: filterBarState.duration?.max,
    durationGreater: filterBarState.duration?.min,
    seasonYear: filterBarState.years,
    isLicensed: true,
    sort: 'POPULARITY_DESC',
    season: filterBarState.season,
    format: filterBarState.format,
    status: filterBarState.airing,
    licensedBy: filterBarState.stream,
    isAdult: false,
  },
  {
    debounce: 1000,
    fetchPolicy: 'cache-and-network',
  }
);

useInfiniteScroll(
  containerListRef,
  () => {
    console.log('Fetch more');
    fetchMore({ variables: { page: currentPage.value + 1 } });
    currentPage.value++;
  },
  { distance: 0 }
);

watch([filterBarState, currentPage], () => {
  refetch({
    page: currentPage.value,
    search: filterBarState.search,
    genres: filterBarState.genres,
    yearGreater: filterBarState.yearRange?.min,
    yearLesser: filterBarState.yearRange?.max,
    episodeLesser: filterBarState.episodes?.max,
    episodeGreater: filterBarState.episodes?.min,
    durationLesser: filterBarState.duration?.max,
    durationGreater: filterBarState.duration?.min,
    seasonYear: filterBarState.years,
    isLicensed: true,
    sort: 'POPULARITY_DESC',
    season: filterBarState.season,
    format: filterBarState.format,
    status: filterBarState.airing?.toUpperCase(),
    licensedBy: filterBarState.stream,
  });
});
</script>

