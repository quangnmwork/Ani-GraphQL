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
    <div class="grid grid-cols-[repeat(auto-fill,185px)] justify-between">
      <AniCard
        v-for="(ani, index) in aniList"
        :key="index"
        :ani="ani"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { Media } from '~/model/ani';

interface landingSectionProps {
  sectionName: string;

  aniList: Media[];
}

const props = defineProps<landingSectionProps>();
</script>
