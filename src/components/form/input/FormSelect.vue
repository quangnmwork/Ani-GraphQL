<template>
  <div
    ref="recommendRef"
    class="relative"
  >
    <label
      v-if="label"
      :for="uuid"
      class="text-md font-semibold text-label"
    >
      {{ label }}
    </label>
    <div
      class="mt-2 grid grid-cols-[13px_minmax(0,1fr)_13px] items-center gap-2 rounded-md bg-white px-2 py-[8px] font-semibold text-input drop-shadow-lg"
      :class="[variantClassObject]"
    >
      <label
        :for="uuid"
        class="fill-input"
      >
        <slot name="icon"></slot>
      </label>

      <input
        :id="uuid"
        v-model="inputValue"
        type=" text"
        class="max-w-full"
        :class="variantClassObject"
        :placeholder="props.placeholder"
        @focus="onFocus"
      />
    </div>

    <div
      class="absolute left-0 top-full z-[100] mt-2 max-h-[500px] w-full rounded-md bg-white p-2 scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-scrollbar"
      :class="props.recommendList && isFocus ? 'block' : 'hidden'"
    >
      <div
        v-for="(item, index) in listRecommend"
        :key="index"
      >
        <div
          v-if="item.title"
          class="font-bold text-label"
        >
          {{ item.title }}
        </div>
        <ul>
          <li
            v-for="(valueItem, id) in _.map(item.list, item.keyItem)"
            :key="id"
            class="cursor-pointer rounded-sm px-2 py-1 font-semibold transition duration-100 hover:bg-[#edf1f5] hover:text-[#3db4f2]"
          >
            {{ valueItem }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { ComponentInternalInstance } from 'vue';
import { DynamicObject } from '~/constant/shared';

import UniqueId from '~/utils/uuid';
import _ from 'lodash';

let isFocus = ref(false);
const recommendRef = ref(null);

interface FormSelectProps {
  label: string;
  placeholder?: string;
  recommendList: {
    list: (string | number | DynamicObject)[];
    title?: string;
    keyItem?: string;
  }[];
  variant?: 'solid' | 'outline';
}

const inputValue = ref('');
const uuid = UniqueId().getID().toString();
const props = defineProps<FormSelectProps>();

const variantClassObject = computed(() => ({
  'bg-input-solid': props?.variant && props.variant === 'solid',
}));

// console.log(isReactive(recommendList.list));
const onFocus = () => {
  isFocus.value = true;
};

const listRecommend = computed({
  get() {
    if (!inputValue.value.length) return props.recommendList;
    return props.recommendList.map((item) => ({
      list: item.list.filter((value) => {
        if (typeof value === 'string') {
          return value.toLowerCase().includes(inputValue.value.toLowerCase());
        } else if (typeof value === 'number') {
          return value.toString().includes(inputValue.value);
        } else if (typeof value === 'object') {
          return Object.values(value).some((value) =>
            value.toString().toLowerCase().includes(inputValue.value.toLowerCase())
          );
        }
      }),
      title: item.title,
      keyItem: item.keyItem,
    }));
  },

  set() {},
});

onClickOutside(recommendRef, () => {
  isFocus.value = false;
});
</script>

<style scoped></style>
