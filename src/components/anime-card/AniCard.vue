<template>
  <div class="ani-container relative cursor-pointer">
    <div class="h-[265px]">
      <img
        :src="props.ani.coverImage.extraLarge"
        class="h-full max-w-full rounded-lg object-cover"
      />
    </div>
    <a class="ani-title mt-2 block font-semibold">{{ props.ani.title.userPreferred }}</a>
    <div
      class="ani-info pointer-events-none invisible absolute top-[5px] left-full z-50 ml-[18px] w-full min-w-[290px] overflow-hidden rounded-sm bg-[#fbfbfb] p-4 opacity-0"
      :class="props.tooltip && props.tooltip == 'left' ? 'ani-info__last' : ''"
    >
      <div name="header">Header</div>
      <div name="studio">Studio</div>
      <div name="info">Info</div>
      <div name="genres">Genre</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Media } from '~/model/ani';
interface AniCardProps {
  ani: Media;
  tooltip?: 'left' | 'right';
}
const props = defineProps<AniCardProps>();
</script>
<style scoped>
.ani-container:hover .ani-title {
  color: v-bind('props.ani.coverImage.color');
}
.ani-info__last {
  margin-right: 18px;
  left: 100%;
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
