import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './mobile-container';
import type { MobileContainer } from './mobile-container';

export default {
  title: 'Mobile Container',
  component: 'mobile-container',
  render: () =>
    html`<mobile-container>
      <div>
        <h1>Hello</h1>
      </div>
    </mobile-container>`,
} as Meta<MobileContainer>;

export const Default = {
  args: {},
} satisfies StoryObj<MobileContainer>;
