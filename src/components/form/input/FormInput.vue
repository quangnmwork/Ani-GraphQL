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
      :class="props.iconPosition === 'left' ? 'flex-row' : 'flex-row-reverse'"
    >
      <label :for="uuid">
        <component
          :is="props.icon"
          class="inline-block fill-current text-input"
        ></component>
      </label>
      <input
        :id="uuid"
        :type="props.type || 'text'"
        class="max-w-full"
        :placeholder="props.placeholder"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
// import { ComponentInternalInstance } from 'vue';
import UniqueId from '~/utils/uuid';

const recommendRef = ref(null);

interface InputProps {
  label: string;
  type?: string;
  icon: any;
  iconPosition?: 'left' | 'right';
  placeholder?: string;
  variant?: 'solid' | 'outline';
}

const uuid = UniqueId().getID().toString();
const props = defineProps<InputProps>();
</script>
