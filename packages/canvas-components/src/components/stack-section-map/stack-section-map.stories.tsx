import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './stack-section-map';
import type { StackSectionMap } from './stack-section-map';

export default {
  title: 'Stack Section Map',
  component: 'stack-section-map',
  render: args => html`
    <div style="width: 400px; height: 600px;">
      <script>
        document.querySelector('stack-section-map').markers = ${JSON.stringify(args.markers)};
      </script>
      <stack-section-map access-token=${args.accessToken} />
    </div>
  `,
} as Meta<StackSectionMap>;

export const Default = {
  args: {
    accessToken: (import.meta as any).env.STORYBOOK_MAPBOX_ACCESS_TOKEN,
    markers: [[134.4647, -33.717007]],
  },
} satisfies StoryObj<StackSectionMap>;
