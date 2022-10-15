import { onMounted, onUnmounted } from 'vue';

export const useEventListener = (target: any, event: any, cb: () => any) => {
  onMounted(() => target.addEventListener(event, cb));
  onUnmounted(() => target.removeEventListener(event, cb));
};
