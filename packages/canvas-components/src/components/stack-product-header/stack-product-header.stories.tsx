import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './stack-product-header';
import type { StackProductHeader } from './stack-product-header';

export default {
  title: 'Stack Product Header',
  component: 'stack-product-header',
  render: args => html`<stack-product-header headline=${args.headline} image-url=${args.imageUrl} />`,
} as Meta<StackProductHeader>;

export const Default = {
  args: {
    headline: 'Rock Lobster',
    imageUrl: 'https://i0.wp.com/eyrewoolfabalone.com.au/wp-content/uploads/2021/04/Eyrewoolf-Abalone-Products-Square-Crop-19-13.jpg?fit=1080%2C1080&ssl=1',
  },
} satisfies StoryObj<StackProductHeader>;
