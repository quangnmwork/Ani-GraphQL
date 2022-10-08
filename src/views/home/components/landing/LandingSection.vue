<template>
  <div>
    <div class="cursor:pointer flex cursor-pointer justify-between">
      <h3
        name="trending-section"
        class="text-[1.4rem] text-landing-head"
      >
        {{ props.sectionName }}
      </h3>
      <span class="text-[1rem] text-landing-head">View all</span>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useQuery } from '@vue/apollo-composable';
import { GET_OVERVIEW } from '~/graphQL/overview';

interface landingSectionProps {
  sectionName: string;
}
const props = defineProps<landingSectionProps>();

const res = useQuery(GET_OVERVIEW);

watchEffect(() => {
  console.log(res.result.value);
});
</script>
