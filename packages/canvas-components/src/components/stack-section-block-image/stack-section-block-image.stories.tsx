import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './stack-section-block-image';
import type { StackSectionBlockImage } from './stack-section-block-image';

export default {
  title: 'Stack Section Block Image',
  component: 'stack-section-block-image',
  render: args => html`<stack-section-block-image url=${args.url} maxHeight=${args.maxHeight} />`,
} as Meta<StackSectionBlockImage>;

export const Default = {
  args: {
    url: '/rock-lobster.jpg',
    maxHeight: 120,
  },
} satisfies StoryObj<StackSectionBlockImage>;
