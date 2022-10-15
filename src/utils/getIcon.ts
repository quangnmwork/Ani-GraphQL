import SmileIcon from '~/icons/SmileIcon.vue';
import NeutraIcon from '~/icons/NeutraIcon.vue';
import SadIcon from '~/icons/SadIcon.vue';

export const getEmotionIconByScore = (score: number) => {
  if (score >= 75) {
    return { icon: SmileIcon, color: '#7bd555' };
  } else if (score >= 50) {
    return { icon: NeutraIcon, color: '#F2737B' };
  } else if (score < 50)
    return {
      icon: SadIcon,
      color: '#d4000d',
    };
  else
    return {
      icon: undefined,
      color: undefined,
    };
};
