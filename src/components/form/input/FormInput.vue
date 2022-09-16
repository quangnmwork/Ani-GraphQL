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
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ComponentInternalInstance } from 'vue';
import UniqueId from '~/utils/uuid';

const recommendRef = ref(null);

interface InputProps {
  label: string;
  type?: string;
  icon: ComponentInternalInstance;
  iconPosition?: 'left' | 'right';
  placeholder?: string;
}

const uuid = UniqueId().getID().toString();
const props = defineProps<InputProps>();
</script>
