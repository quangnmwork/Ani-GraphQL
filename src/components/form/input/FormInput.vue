<template>
  <div
    ref="recommendRef"
    class="relative"
  >
    <label
      v-if="label"
      :for="uuid"
      class="text-md text-label font-semibold"
    >
      {{ label }}
    </label>
    <div
      class="grid grid-cols-[13px_minmax(0,1fr)_13px] items-center bg-white drop-shadow-lg rounded-md px-2 py-[8px] text-input gap-2 font-semibold mt-2"
      :class="props.iconPosition === 'left' ? 'flex-row' : 'flex-row-reverse'"
    >
      <label :for="uuid">
        <component
          :is="props.icon"
          class="text-input fill-current inline-block"
        ></component>
      </label>
      <input
        :id="uuid"
        :type="props.type || 'text'"
        class="max-w-full"
        :placeholder="props.placeholder"
        @focus="onFocus"
      />
    </div>
    <div
      class="absolute left-0 p-2 top-full bg-white mt-2 w-full rounded-md max-h-[500px] z-50 scrollbar-thin scrollbar-thumb-scrollbar scrollbar-track-gray-100"
      :class="props.recommendList && isFocus ? 'block' : 'hidden'"
    >
      <div
        v-for="(item, index) in props.recommendList"
        :key="index"
      >
        <div
          class="text-label font-bold"
          v-if="item.title"
        >
          {{ item.title }}
        </div>
        <ul class="">
          <li
            v-for="(valueItem, index) in item.list"
            :key="index"
            class="px-2 py-1 cursor-pointer transition duration-100 rounded-sm hover:text-[#3db4f2] hover:bg-[#edf1f5] font-semibold"
          >
            {{
              typeof valueItem == 'object' ? _.map(valueItem, item.keyItem).toString() : valueItem
            }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ComponentInternalInstance } from 'vue';
import { DynamicObject } from '~/constant/shared';
import UniqueId from '~/utils/uuid';
import _ from 'lodash';

let isFocus = ref(false);
const recommendRef = ref(null);

interface InputProps {
  label: string;
  type?: string;
  icon: ComponentInternalInstance;
  iconPosition?: 'left' | 'right';
  placeholder?: string;
  recommendList: {
    list: (string | number)[] | DynamicObject;
    title?: string;
    keyItem?: string;
  }[];
}

const uuid = UniqueId().getID().toString();
const props = defineProps<InputProps>();

const onFocus = () => {
  isFocus.value = true;
};
onClickOutside(recommendRef, () => {
  isFocus.value = false;
});
</script>
