<template>
  <div class="my-5">
    <LandingHeading :section-name="props.sectionName" />
    <div
      class="my-3 grid touch-pan-x snap-x auto-cols-[180px] grid-flow-col grid-cols-[repeat(auto-fit,180px)] gap-x-[12px] overflow-x-auto py-5 scrollbar-thin scrollbar-track-ani-blue-300 scrollbar-thumb-ani-blue-600 lg:snap-none lg:overflow-x-hidden"
    >
      <template v-if="props.isLoading">
        <AniCard
          v-for="(ani, index) in new Array(6).fill(undefined)"
          :key="index"
          :ani="ani"
        />
      </template>
      <template v-if="!props.isLoading">
        <AniCard
          v-for="(ani, index) in props.aniList"
          :key="index"
          :ani="ani"
        />
      </template>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Media } from '~/model/ani';

interface landingSectionProps {
  sectionName: string;
  aniList: Media[];
  isLoading: boolean;
}

const props = defineProps<landingSectionProps>();
</script>
