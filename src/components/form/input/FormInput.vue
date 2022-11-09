<template>
  <div
    ref="recommendRef"
    class="relative"
  >
    <label
      v-if="label"
      :for="uuid"
      class="text-[1.5rem] font-semibold text-label"
    >
      {{ label }}
    </label>
    <div
      class="mt-2 grid grid-cols-[13px_minmax(0,1fr)_13px] items-center gap-2 rounded-md bg-white px-2 py-[8px] font-semibold text-input drop-shadow-lg"
      :class="props.iconPosition === 'left' ? 'flex-row' : 'flex-row-reverse'"
    >
      <label
        :for="uuid"
        class="fill-input"
      >
        <slot name="icon"></slot>
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

  iconPosition?: 'left' | 'right';
  placeholder?: string;
  variant?: 'solid' | 'outline';
}

const uuid = UniqueId().getID().toString();
const props = defineProps<InputProps>();
</script>
