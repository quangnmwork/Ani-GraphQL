<template>
  <div>
    <p
      v-if="label"
      class="text-md font-semibold text-label"
    >
      {{ label }}
    </p>
    <a-slider
      :id="UniqueId().getID().toString()"
      v-model:value="rangeValue"
      :range="props.isRange"
      :min="props.min"
      :max="props.max"
    />
  </div>
</template>
<script lang="ts" setup>
import UniqueId from '~/utils/uuid';
interface FormRangeProps {
  rangeValue: [number, number] | number;
  isRange?: boolean;
  min: number;
  max: number;
  label?: string;
}
const props = withDefaults(defineProps<FormRangeProps>(), {
  isRange: true,
  rangeValue: () => [1, 100],
  min: 1,
  max: 150,
  label: undefined,
});
const rangeValue = ref(props.rangeValue);
</script>
<style>
.code-box-demo .ant-slider {
  margin-bottom: 16px;
}
.ant-slider-handle {
  width: 16px !important;
  height: 16px !important;
  background-color: rgb(61, 180, 242) !important;
  border-radius: 6px !important;
  border: none;
}
</style>
