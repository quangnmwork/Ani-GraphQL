<template>
  <div class="cursor:pointer flex cursor-pointer justify-between">
    <h3
      name="trending-section"
      class="text-[1.6rem] font-bold uppercase text-ani-gray-800"
    >
      {{ props.sectionName }}
    </h3>
    <span class="text-[1.2rem] font-bold text-ani-gray-800">View all</span>
  </div>
</template>
<script setup lang="ts">
interface landingSectionProps {
  sectionName: string;
}

const props = defineProps<landingSectionProps>();
</script>
