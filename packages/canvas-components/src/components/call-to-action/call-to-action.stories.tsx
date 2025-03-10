import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './call-to-action';
import type { CallToAction } from './call-to-action';

export default {
  title: 'Call To Action',
  component: 'call-to-action',
  render: () => html`<call-to-action>Call to Action</call-to-action>`,
} as Meta<CallToAction>;

export const Primary = {
  args: {},
} satisfies StoryObj<CallToAction>;
