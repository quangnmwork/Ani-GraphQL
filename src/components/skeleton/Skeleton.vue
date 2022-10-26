<template>
  <div class="skeleton"></div>
</template>
<script setup lang="ts">
interface SkeletonProps {
  width: number | string;
  height: number | string;
  shape: 'circle' | 'square';
}
const props = withDefaults(defineProps<SkeletonProps>(), {
  width: '100%',
  height: 'auto',
  shape: 'square',
});
const width = typeof props.width == 'number' ? `${props.width}px` : props.width;
const height = typeof props.height == 'number' ? `${props.height}px` : props.height;
const radius = props.shape == 'circle' ? '50%' : '3px';
</script>

<style>
.skeleton {
  width: v-bind(width);
  height: v-bind(height);
  border-radius: v-bind(radius);
  background: #d9d9d9;
  animation: pulse 1000ms infinite alternate;
}

@keyframes pulse {
  from {
    background-color: #c1c1c1;
  }
  to {
    background-color: #b5b3b3;
  }
}
</style>
