<template>
  <Navigation />

  <div class="bg-layout">
    <Hero />
    <FilterBar />
    <Container class="py-10">
      <LandingSection
        :section-name="'Trending Now'"
        :ani-list="landingAniList.trending.media"
        :is-loading="loading"
      />

      <LandingSection
        :section-name="'Popular this season'"
        :ani-list="landingAniList.popularSeason.media"
        :is-loading="loading"
      />
      <LandingSection
        :section-name="'Upcoming next season'"
        :ani-list="landingAniList.nextSeason.media"
        :is-loading="loading"
      />
      <LandingSection
        :section-name="'All Time Popular'"
        :ani-list="landingAniList.popularAllTime.media"
        :is-loading="loading"
      />
      <Ranking :ani-list="landingAniList.topAnime.media" />
      <LandingSection
        class="md:hidden"
        :section-name="'Top 100'"
        :ani-list="landingAniList.topAnime.media"
        :is-loading="loading"
      />
    </Container>
  </div>
  <Footer />
</template>

<script setup lang="ts">
import { useQuery } from '@vue/apollo-composable';

import { GET_OVER_VIEW } from '~/graphQL/overview/Overview';
import { HomeAniProps } from '~/model/home';
import { getSeason } from '~/utils/utils';

const landingAniList = reactive<HomeAniProps>({
  trending: { media: [] },
  popularSeason: { media: [] },
  nextSeason: { media: [] },
  popularAllTime: { media: [] },
  topAnime: { media: [] },
});

const currentDay = new Date();

const { loading, result } = useQuery(GET_OVER_VIEW, {
  season: getSeason(),
  seasonYear: currentDay.getUTCFullYear(),
  nextSeason: getSeason(true),
  nextYear: currentDay.getUTCFullYear() + 1,
});

watch(result, () => {
  const resData: HomeAniProps = result.value;

  for (const [key, value] of Object.entries(resData)) {
    landingAniList[key as keyof HomeAniProps] = value;
  }
  // console.log(landingAniList.topAnime.media);
});
</script>
<script lang="ts">
export default {
  name: 'Home',
};
</script>
<style scoped></style>
<!-- <LandingSection :section-name="'Trending Now'" /> -->
