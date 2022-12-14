import FormRange from '../../components/form/input/FormRange.vue';

import { Meta, StoryFn } from '@storybook/vue3';

export default {
  /* ๐ The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'FormRange',
  component: FormRange,
} as Meta<typeof FormRange>;

//๐ We create a โtemplateโ of how args map to rendering
const Template: StoryFn<typeof FormRange> = (args) => ({
  components: { FormRange },
  data() {
    return { value: 1 };
  },
  setup() {
    return { args };
  },
  template: '<FormRange />',
});

//๐ Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {};
