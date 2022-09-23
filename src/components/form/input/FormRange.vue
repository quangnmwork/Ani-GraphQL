<template>
  <div>
    <label>Year Range</label>
    <div
      class="h-[10px] relative w-[171px] bg-input-solid"
      name="range-slider"
    >
      <div
        name="line"
        class="h-full bg-rail"
      >
        <span
          class="thumb"
          id="thumbMin"
          style="left: 0%"
        ></span>
        <span
          class="thumb"
          id="thumbMax"
          style="left: 100%"
        ></span>
        <input
          id="rangeMin"
          type="range"
          max="100"
          min="10"
          step="5"
          value="0"
        />
        <input
          id="rangeMax"
          type="range"
          max="100"
          min="10"
          step="5"
          value="100"
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped>
.thumb {
  position: absolute;
  z-index: 2;

  background-color: #3db4f2;
  border-radius: 6px;
  outline: none;
  top: -3px;
  height: 16px;
  width: 16px;
  left: -9px;
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
/* input::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  pointer-events: all;
  border-radius: 50%;
  cursor: pointer;
  width: 18px;
  height: 18px;
} */
</style>
