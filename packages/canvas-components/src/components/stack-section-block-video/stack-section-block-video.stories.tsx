import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './stack-section-block-video';
import type { StackSectionBlockVideo } from './stack-section-block-video';

export default {
  title: 'Stack Section Block Video',
  component: 'stack-section-block-video',
  render: args => html`<stack-section-block-video video-id=${args.videoId} />`,
} as Meta<StackSectionBlockVideo>;

export const Default = {
  args: {
    videoId: '0f91d08a09ce9cf1089d2624d2ea45dd',
  },
} satisfies StoryObj<StackSectionBlockVideo>;
