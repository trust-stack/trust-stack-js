import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './logo-grid';
import type { LogoGrid } from './logo-grid';

export default {
  title: 'Logo Grid',
  component: 'logo-grid',
  render: args => html`
    <div style="width: 400px; height: 600px;">
      <script>
        document.querySelector('logo-grid').items = ${JSON.stringify(args.items)};
      </script>
      <logo-grid />
    </div>
  `,
} as Meta<LogoGrid>;

export const Default = {
  args: {
    items: [
      {
        src: '/awa.webp',
      },
      {
        src: '/sapfbia.webp',
      },
    ],
  },
} satisfies StoryObj<LogoGrid>;
