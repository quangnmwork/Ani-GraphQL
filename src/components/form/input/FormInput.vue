<template>
  <div ref="recommendRef">
    <label
      v-if="label"
      :for="uuid"
      class="text-md text-label mb-2 font-semibold"
    >
      {{ label }}
    </label>
    <div
      class="flex items-center bg-white drop-shadow-lg py-2 px-3 gap-2 rounded-md text-input relative"
      :class="props.iconPosition === 'left' ? 'flex-row' : 'flex-row-reverse'"
    >
      <label :for="uuid">
        <component
          :is="props.icon"
          class="text-input fill-current block"
        ></component>
      </label>
      <input
        :id="uuid"
        :type="props.type || 'text'"
        class="bg-none border-none outline-none font-semibold"
        :placeholder="props.placeholder"
        @focus="onFocus"
      />
      <div
        class="absolute left-0 p-2 top-full bg-white mt-4 w-full rounded-md"
        :class="props.recommendList && isFocus ? 'block' : 'hidden'"
      >
        <ul class="max-h-[500px] scrollbar-thin scrollbar-thumb-scrollbar scrollbar-track-gray-100">
          <li
            v-for="(item, index) in props.recommendList"
            :key="index"
            class="px-2 py-1 cursor-pointer transition duration-100 rounded-sm hover:text-[#3db4f2] hover:bg-[#edf1f5] font-semibold"
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ComponentInternalInstance } from 'vue';
import UniqueId from '../../../utils/uuid';

let isFocus = ref(false);
const recommendRef = ref(null);

interface InputProps {
  label: string;
  type?: string;
  icon: ComponentInternalInstance;
  iconPosition?: 'left' | 'right';
  placeholder?: string;
  recommendList?: (string | number)[];
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
