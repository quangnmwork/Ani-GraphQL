<template>
  <div class="ani-container relative cursor-pointer">
    <div class="h-[265px] w-full">
      <img
        :src="props.ani.coverImage.extraLarge || props.ani.coverImage.large"
        class="h-full w-full rounded-sm object-cover"
      />
    </div>
    <a class="ani-title mt-2 block font-semibold">{{ props.ani.title.userPreferred }}</a>
    <div
      ref="inViewport"
      class="ani-info pointer-events-none invisible absolute top-[5px] left-full z-50 w-full min-w-[290px] overflow-hidden rounded-sm bg-[#fbfbfb] p-4 opacity-0"
    >
      <div
        name="header"
        class="flex items-center justify-between"
      >
        <a class="text-lg font-semibold text-ani-card">
          {{ timeEpisode }}
        </a>
        <div
          v-if="props.ani.averageScore"
          class="flex items-center gap-3"
        >
          <span
            name="average-score"
            class="ani-score"
          >
            <component
              :is="icon"
              v-if="icon"
            />
          </span>
          <span class="text-md font-semibold">{{ props.ani.averageScore }}%</span>
        </div>
      </div>
      <div
        name="studio"
        class="ani-studio mt-4 font-semibold"
      >
        <span>{{ props.ani.studios.edges[0]?.node.name }}</span>
        <div class="text-md mb-4 block font-semibold text-ani-card">
          <span
            v-if="props.ani.format"
            class="mr-1"
          >
            {{ props.ani.format }} Show
          </span>
          <span
            v-if="props.ani.episodes"
            class="before:ml-1 before:h-[16px] before:w-[16px] before:rounded-full before:bg-ani-card before:font-semibold before:content-['']"
          >
            {{ props.ani.episodes }} episodes
          </span>
        </div>
      </div>

      <div
        v-if="props.ani.genres"
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
const inViewport = ref<HTMLDivElement>();

onMounted(() => {
  if (inViewport.value) {
    if (inViewport.value?.getBoundingClientRect().right > window.innerWidth) {
      inViewport.value?.classList.remove('left-full');
      inViewport.value?.classList.add('mr-[18px]');
      inViewport.value?.classList.add('right-full');
    } else {
      inViewport.value?.classList.add('ml-[18px]');
      inViewport.value?.classList.add('left-full');
    }
  }
});
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
  right: 100% !important;
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
