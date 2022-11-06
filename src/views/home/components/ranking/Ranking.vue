<template>
  <div class="py-5">
    <LandingHeading :section-name="'Top 100'" />
    <div class="grid grid-cols-[1fr] gap-[24px]">
      <RankingItem
        v-for="(item, index) in props.aniList"
        :key="index"
        :media="item"
        :index="index"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { Media } from '~/model/ani';

interface RankingProps {
  aniList: Media[];
}
const props = defineProps<RankingProps>();
</script>
