<template>
  <div class="multi-range-slider">
    <div class="bar">
      <div
        class="bar-left"
        :style="{ width: barMin + '%' }"
        @click="onBarLeftClick"
      ></div>
      <input
        class="input-type-range input-type-range-min"
        type="range"
        :min="minimum"
        :max="maximum"
        :step="step"
        :value="valueMin"
        @input.stop.prevent="onInputMinChange"
      />
      <div
        class="thumb thumb-left"
        @mousedown="onLeftThumbMousedown"
        @touchstart="onLeftThumbMousedown"
      >
        <div class="caption">
          <span class="min-caption">{{ minCaption || barMinVal }}</span>
        </div>
      </div>
      <div class="bar-inner">
        <div
          class="bar-inner-left"
          @click="onInnerBarLeftClick"
        ></div>
        <div
          class="bar-inner-right"
          @click="onInnerBarRightClick"
        ></div>
      </div>
      <input
        class="input-type-range input-type-range-max"
        type="range"
        :min="minimum"
        :max="maximum"
        :step="step"
        :value="valueMax"
        @input.stop.prevent="onInputMaxChange"
      />

      <div
        class="thumb thumb-right"
        @mousedown="onRightThumbMousedown"
        @touchstart="onRightThumbMousedown"
      >
        <div class="caption">
          <span class="max-caption">{{ maxCaption || barMaxVal }}</span>
        </div>
      </div>
      <div
        class="bar-right"
        :style="{ width: barMax + '%' }"
        @click="onBarRightClick"
      ></div>
    </div>
  </div>
</template>
<script setup></script>
<style lang="scss">
$color-rail: #c9e8ff;
$color-active-region: #4287f5;
$color-dot: #4287f5;
.multi-range-slider * {
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
}
.multi-range-slider {
  display: flex;
  position: relative;
  border: solid 1px gray;
  border-radius: 10px;
  padding: 20px 10px;
  flex-direction: column;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.multi-range-slider .bar {
  display: flex;
}
.multi-range-slider .bar-left {
  width: 25%;
  background-color: $color-rail;
  border-radius: 10px 0px 0px 10px;

  padding: 4px 0px;
}
.multi-range-slider .bar-right {
  width: 25%;
  background-color: $color-rail;
  border-radius: 0px 10px 10px 0px;
}
.multi-range-slider .bar-inner {
  background-color: $color-active-region;
  display: flex;
  flex-grow: 1;
  flex-shrink: 1;
  justify-content: space-between;
  position: relative;
  justify-content: space-between;
}
.multi-range-slider .bar-inner-left {
  width: 50%;
}
.multi-range-slider .bar-inner-right {
  width: 50%;
}
.multi-range-slider .thumb {
  background-color: red;
  position: relative;
  z-index: 1;
  cursor: pointer;
}
.multi-range-slider .thumb::before {
  content: '';
  background-color: $color-dot;
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 6px;
  z-index: 1;
  margin: -4px;
  cursor: pointer;
}
.multi-range-slider .input-type-range:focus + .thumb::after {
  content: '';
  position: absolute;
  top: -4px;
  left: -4px;
  width: 11px;
  height: 11px;
  z-index: 2;
  border-radius: 50%;
  border: dotted 1px black;
  box-shadow: 0px 0px 5px white, inset 0px 0px 10px black;
}
.multi-range-slider .caption {
  position: absolute;
  bottom: 30px;
  width: 2px;
  height: 2px;
  left: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: visible;
  display: none;
}
.multi-range-slider .thumb .caption * {
  position: absolute;
  min-width: 30px;
  height: 30px;
  font-size: 75%;
  text-align: center;
  line-height: 10px;
  background-color: black;
  border-radius: 6px;
  color: white;
  padding: 0px 5px;
  white-space: nowrap;
}
.multi-range-slider .thumb:active .caption {
  display: flex;
}
.multi-range-slider .input-type-range:focus + .thumb .caption {
  display: flex;
}
.multi-range-slider .input-type-range {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  opacity: 0;
}

/* .multi-range-slider .thumb-left {
  right: 12px;
}
.multi-range-slider .thumb-right {
  left: 8px;
} */
</style>
