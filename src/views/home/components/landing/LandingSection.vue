<template>
  <div class="my-5">
    <LandingHeading :section-name="props.sectionName" />
    <div
      class="my-3 grid grid-cols-[repeat(auto-fill,185px)] justify-between 2xl:gap-y-[10px] 2xl:gap-x-[10px]"
    >
      <template v-if="props.isLoading">
        <AniCard
          v-for="(ani, index) in new Array(5).fill(undefined)"
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
