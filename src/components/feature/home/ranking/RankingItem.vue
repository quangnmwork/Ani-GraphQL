<template>
  <div
    class="min-h[80px] relative ml-[80px] inline-grid cursor-pointer grid-cols-[48px_auto] rounded-[4px] bg-ani-background-100 p-[10px] shadow-md"
  >
    <div
      class="absolute left-[-70px] top-[18px] flex h-[50px] w-[50px] text-[24px] leading-none text-ani-gray-600"
    >
      <span>#</span>
      <span>{{ props.index + 1 }}</span>
    </div>
    <a
      href=""
      class="relative overflow-hidden rounded-[2px]"
    >
      <img
        :src="props.media.coverImage.large"
        :alt="props.media.title.userPreferred"
      />
    </a>
    <div class="content overflow-auto">
      <div class="text-[14px]">
        <div class="mb-[8px]">
          <a class="content-title font-semibold text-ani-gray-900">
            {{ props.media.title.userPreferred }}
          </a>
        </div>
        <div class="ml-[-2px] mb-2 flex h-[18px] flex-wrap items-center gap-[3px]">
          <div
            v-for="(genre, id) in props.media.genres"
            :key="id"
            class="content-genre rounded-[10px]"
          >
            <span class="px-3 text-[12px] text-ani-white">{{ genre }}</span>
          </div>
        </div>
      </div>
      <div>
        <component
          :is="icon"
          class="inline-block align-top"
        />
        <div class="mt-[-3px] inline-block pl-[4px]">
          <span>{{ props.media.averageScore }}%</span>
          <div class="text-[12px] text-ani-gray-600">{{ props.media.popularity }} users</div>
        </div>
      </div>
      <div>
        <div class="mt-[-3px] inline-block pl-[4px]">
          <span>{{ format.formatConvert }}</span>
          <div class="text-[12px] text-ani-gray-600">{{ format.duration }}</div>
        </div>
      </div>
      <div>
        <div class="mt-[-3px] inline-block pl-[4px]">
          <span>{{ props.media.season }} {{ props.media.seasonYear }}</span>
          <div class="text-[12px] text-ani-gray-600">{{ props.media.status }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { Media } from '~/model/ani';

interface RankingItemProps {
  media: Media;
  index: number;
}
const props = defineProps<RankingItemProps>();

const { icon } = getEmotionIconByScore(props.media ? props.media.averageScore : 0);

const format = computed(() => {
  if (props.media.format === 'MOVIE') {
    const hour = Math.floor(props.media.duration / 60);
    const minutes = props.media.duration - hour * 60;
    return {
      formatConvert: 'Movie',
      duration: `${hour} hours , ${minutes} minutes`,
    };
  }

  return {
    formatConvert: `${props.media.format} Show`,
    duration: `${props.media.episodes} episodes`,
  };
});
</script>
<style scoped>
.content {
  padding: 8px 16px;
  padding-right: 8px;
  min-width: 0;
  align-items: center;
  display: grid;
  grid-template-columns: minmax(auto, calc(100% - 440px)) 130px 130px 150px;
  grid-gap: 10px;
}

.content-title:hover {
  color: v-bind('props.media.coverImage.color');
}
.content-genre {
  background: v-bind('props.media.coverImage.color');
}
</style>
