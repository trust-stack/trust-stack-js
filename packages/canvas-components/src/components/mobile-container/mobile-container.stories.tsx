import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './mobile-container';
import type { MobileContainer } from './mobile-container';

export default {
  title: 'Mobile Container',
  component: 'mobile-container',
  render: () =>
    html`<mobile-container>
      <div style="padding: 16px;">
        <h1>Scrolling Content</h1>
        ${Array(20)
          .fill(0)
          .map(() => html`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>`)}
      </div>
    </mobile-container>`,
} as Meta<MobileContainer>;

export const Default = {
  args: {},
} satisfies StoryObj<MobileContainer>;
