<template>
  <div>
    <div>
      <img
        :src="props.ani.bannerImage"
        class="h-auto max-w-full"
      />
      <a class="text-input">Hello</a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Media } from '~/model/ani';
interface AniCardProps {
  ani: Media;
}
const props = defineProps<AniCardProps>();
</script>
