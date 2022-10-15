<template>
  <div class="ani-container relative cursor-pointer">
    <div class="h-[265px] w-full">
      <img
        :src="props.ani.coverImage.extraLarge"
        class="h-full w-full rounded-sm object-cover"
      />
    </div>
    <a class="ani-title mt-2 block font-semibold">{{ props.ani.title.userPreferred }}</a>
    <div
      class="ani-info pointer-events-none invisible absolute top-[5px] left-full z-50 ml-[18px] w-full min-w-[290px] overflow-hidden rounded-sm bg-[#fbfbfb] p-4 opacity-0"
    >
      <div
        name="header"
        class="flex items-center justify-between"
      >
        <a class="text-lg font-semibold text-ani-card">
          {{ timeEpisode }}
        </a>
        <div class="flex items-center gap-3">
          <span
            name="average-score"
            class="ani-score"
          >
            <component :is="icon" />
          </span>
          <span class="text-md font-semibold">{{ props.ani.averageScore }}%</span>
        </div>
      </div>
      <div
        name="studio"
        class="text-md ani-studio mt-4 font-semibold"
      >
        <span>{{ props.ani.studios.edges[0].node.name }}</span>
        <span class="text-md mb-4 block font-semibold text-ani-card">{{ props.ani.format }}</span>
      </div>

      <div
        name="genres"
        class="flex h-[20px] flex-wrap overflow-hidden"
      >
        <span
          v-for="(item, index) in props.ani.genres"
          :key="index"
          class="ani-genres mr-2 rounded-[10px] px-[12px] text-sm lowercase text-white"
        >
          {{ item }}
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Media } from '~/model/ani';
import { getEmotionIconByScore } from '~/utils/getIcon';
import { getNextEpisode } from '~/utils/utils';
interface AniCardProps {
  ani: Media;
}
const props = defineProps<AniCardProps>();

const { icon } = getEmotionIconByScore(props.ani.averageScore);

const timeEpisode = computed(() => {
  if (props.ani.nextAiringEpisode) {
    const nextEpisode = getNextEpisode(props.ani.nextAiringEpisode.timeUntilAiring);
    if (nextEpisode) return `Ep ${props.ani.nextAiringEpisode.episode} airing in ${nextEpisode}`;
  } else return `${props.ani.season} ${props.ani.seasonYear}`;
});
</script>
<style scoped>
.ani-container:hover .ani-title {
  color: v-bind('props.ani.coverImage.color');
}
.ani-studio {
  color: v-bind('props.ani.coverImage.color');
}

.ani-genres {
  background-color: v-bind('props.ani.coverImage.color');
}
.ani-score svg {
  fill: red !important;
}

.ani-info__last {
  margin-right: 18px !important;
  left: 100% !important;
}
.ani-info {
  transition: all 0.2s linear;
}
.ani-container:hover .ani-info {
  opacity: 1;
  visibility: visible;
}
.ani-container:hover .ani-info::before {
  content: '';
  position: absolute;
  top: 15%;
  right: 100%;
  z-index: 20;
  color: white;
  border-right: 0.6rem solid currentColor;
  border-bottom: 0.4rem solid transparent;
  border-top: 0.4rem solid transparent;
}
</style>
