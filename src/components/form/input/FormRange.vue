<template>
  <div>
    <label>{{ props.label }}</label>
    <div
      class="h-[10px] relative w-[171px] bg-input-solid"
      name="range-slider"
    >
      <div
        name="line"
        class="h-full bg-rail"
      >
        <div class="thumb-box">
          <span
            class="thumb"
            id="thumbMin"
            style="left: 0%"
          ></span>
          <span class="tooltip">{{ props.maxVal }}</span>
        </div>
        <div>
          <span
            class="thumb"
            id="thumbMax"
            style="left: 100%"
          />
        </div>
        <input
          id="rangeMin"
          type="range"
          :max="props.maxVal"
          :min="props.minVal"
          :step="props.step || 1"
          :value="props.minVal"
        />
        <input
          id="rangeMax"
          type="range"
          :max="props.maxVal"
          :min="props.minVal"
          :step="props.step || 1"
          :value="props.maxVal"
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
interface FormRangeProps {
  maxVal: number;
  minVal: number;
  step?: number;
  label?: string;
}
const props = defineProps<FormRangeProps>();
</script>
<style scoped>
.thumb {
  position: absolute;
  z-index: 2;

  background-color: #3db4f2;
  border-radius: 6px;
  outline: none;
  top: -3px;
  width: 100%;
  height: 100%;
  left: -9px;
}
.thumb-box {
  position: relative;
  height: 16px;
  width: 16px;
}
.tooltip {
  visibility: hidden;
  background-color: black;
  color: #fff;
  text-align: center;
  padding: 5px;
  top: -39px;
  border-radius: 6px;
  position: absolute;
  z-index: 1;
}
.thumb-box:hover > .tooltip {
  visibility: visible;
}
input {
  -webkit-appearance: none;
  appearance: none;
  position: absolute;
  pointer-events: none;
  z-index: 3;
  height: 3px;
  top: 0;
  width: 100%;
  opacity: 0;
  margin: 0;
}
</style>
