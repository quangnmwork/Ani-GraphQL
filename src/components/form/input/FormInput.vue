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
        v-model="input"
        :type="props.type || 'text'"
        class="max-w-full"
        :placeholder="props.placeholder"
        @input="(e )=> emits('update:value', {state:props.state,value:(e.target as HTMLInputElement)?.value})"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
// import { ComponentInternalInstance } from 'vue';

import UniqueId from '~/utils/uuid';

const recommendRef = ref(null);
const emits = defineEmits(['update:value']);
const input = ref('');

interface InputProps {
  label: string;
  type?: string;
  state: string;

  iconPosition?: 'left' | 'right';
  placeholder?: string;
  variant?: 'solid' | 'outline';
}

const uuid = UniqueId().getID().toString();
const props = defineProps<InputProps>();
</script>
