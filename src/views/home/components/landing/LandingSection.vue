<template>
  <div class="py-5">
    <div class="cursor:pointer flex cursor-pointer justify-between">
      <h3
        name="trending-section"
        class="text-[1.4rem] uppercase text-landing-head"
      >
        {{ props.sectionName }}
      </h3>
      <span class="text-[1rem] text-landing-head">View all</span>
    </div>
    <div
      class="grid grid-cols-[repeat(auto-fill,185px)] justify-between 2xl:gap-y-[10px] 2xl:gap-x-[10px]"
    >
      <AniCard
        v-for="(ani, index) in aniList"
        :key="index"
        :ani="ani"
        :is-loading="props.isLoading"
      />
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
watchEffect(() => {
  console.log('Media', props.isLoading);
});
</script>
