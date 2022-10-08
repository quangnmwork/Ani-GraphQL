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
interface landingSectionProps {
  sectionName: string;
}
const props = defineProps<landingSectionProps>();
</script>
