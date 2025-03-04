import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './stack-section-map';
import type { StackSectionMap } from './stack-section-map';

export default {
  title: 'Stack Section Map',
  component: 'stack-section-map',
} as Meta<StackSectionMap>;

export const Marker = {
  render: args => html`
    <div style="width: 400px; height: 600px;">
      <script>
        document.querySelector('stack-section-map').markers = ${JSON.stringify(args.markers)};
      </script>
      <stack-section-map access-token=${args.accessToken} />
    </div>
  `,
  args: {
    accessToken: (import.meta as any).env.STORYBOOK_MAPBOX_ACCESS_TOKEN,
    markers: [[134.4647, -33.717007]],
  },
} satisfies StoryObj<StackSectionMap>;

export const Polygon = {
  render: args => html`
    <div style="width: 400px; height: 600px;">
      <script>
        document.querySelector('stack-section-map').polygon = ${JSON.stringify(args.polygon)};
      </script>
      <stack-section-map access-token=${args.accessToken} />
    </div>
  `,
  args: {
    accessToken: (import.meta as any).env.STORYBOOK_MAPBOX_ACCESS_TOKEN,
    polygon: {
      coordinates: [
        [139.2652576110935, -35.7714906900623],
        [139.2652576110935, -36.2093516897045],
        [138.99467614001696, -36.2093516897045],
        [138.98426916036408, -36.45248595527746],
        [138.65124581137042, -36.45248595527746],
        [138.69287372998184, -38.76063676815905],
        [139.4421762652433, -39.286161849586456],
        [140.93037435611325, -38.25573345217666],
        [140.9615952950889, -38.02655369684782],
        [140.6493859054009, -38.04294754541016],
        [140.3788044343243, -37.89527086438736],
        [140.25392067845593, -37.664961679584245],
        [140.0457810853306, -37.43393566438572],
        [139.85845545151096, -37.30159954559187],
        [139.7543856549483, -37.144147448546896],
        [139.68153679734417, -36.94479118359131],
        [139.82723451253537, -36.79493069530432],
        [139.81682753288254, -36.49432892427011],
        [139.68153679734417, -36.1757564177103],
        [139.53583908215307, -35.94861167799493],
        [139.31729250937485, -35.69546061710259],
      ],
      label: 'Southern Rock Lobster Zone',
    },
  },
} satisfies StoryObj<StackSectionMap>;
