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
      :class="[variantClassObject]"
    >
      <label :for="uuid">
        <component
          :is="props.icon"
          class="text-input fill-current inline-block"
        ></component>
      </label>
      <input
        :id="uuid"
        type=" text"
        class="max-w-full"
        :class="variantClassObject"
        :placeholder="props.placeholder"
        @focus="onFocus"
        v-model="inputValue"
      />
    </div>
    <div
      class="absolute left-0 p-2 top-full bg-white mt-2 w-full rounded-md max-h-[500px] z-50 scrollbar-thin scrollbar-thumb-scrollbar scrollbar-track-gray-100"
      :class="props.recommendList && isFocus ? 'block' : 'hidden'"
    >
      <div
        v-for="(item, index) in listRecommend.list || props.recommendList"
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
            v-for="(valueItem, index) in _.map(item.list, item.keyItem)"
            :key="index"
            class="px-2 py-1 cursor-pointer transition duration-100 rounded-sm hover:text-[#3db4f2] hover:bg-[#edf1f5] font-semibold"
          >
            {{ valueItem }}
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
import Fuse from 'fuse.js';

let isFocus = ref(false);
const recommendRef = ref(null);

interface InputProps {
  label: string;
  icon: ComponentInternalInstance;

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
const props = defineProps<InputProps>();

const variantClassObject = computed(() => ({
  'bg-input-solid': props?.variant && props.variant === 'solid',
}));

const recommendList = reactive({
  list: props.recommendList,
});

const onFocus = () => {
  isFocus.value = true;
};

const keyOptions = props.recommendList
  ?.map((list) => {
    if (list.keyItem) return list.keyItem;
    else return;
  })
  .filter(Boolean) as string[];

const fuse = new Fuse([] as (string | number | DynamicObject)[], {
  keys: keyOptions?.length ? keyOptions : [],
  threshold: 0.4,
  includeMatches: true,
  distance: 10,
});

const listRecommend = computed({
  get() {
    if (!inputValue.value.length) return { list: props.recommendList };
    props.recommendList?.forEach((list, index) => {
      fuse.setCollection([]);
      fuse.setCollection(list.list);
      recommendList.list[index].list = _.map(fuse.search(inputValue.value), 'item');
    });
    return recommendList;
  },

  set() {},
});

onClickOutside(recommendRef, () => {
  isFocus.value = false;
});
</script>
