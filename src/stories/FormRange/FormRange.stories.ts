import FormRange from '../../components/form/input/FormRange.vue';

import { Meta, StoryFn } from '@storybook/vue3';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'FormRange',
  component: FormRange,
} as Meta<typeof FormRange>;

//👇 We create a “template” of how args map to rendering
const Template: StoryFn<typeof FormRange> = (args) => ({
  components: { FormRange },
  setup() {
    return { args };
  },
  template: '<FormRange />',
});

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {};
