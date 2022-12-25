<template>
  <p>Hello</p>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';

const route = useRoute();
console.log(route.params);
</script>
