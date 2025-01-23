import { Meta } from '@storybook/web-components';
import { html } from 'lit';
import '../components/header-image/header-image';
import '../components/stack-layout/stack-layout';
import '../components/stack-section-block-image/stack-section-block-image';
import '../components/stack-section/stack-section';

export default {
  name: 'Examples/Stacked',
  render: () => html`
    <stack-layout>
      <header-image subheader="ROCK LOBSTER" headline="A taste of our country" image="/ocean-banner.jpg"></header-image>
      <stack-section headline="Wild Caught" subtitle="12/12/2024" variant="surface">
        <p>This product was wildcaught of the coast of Geraldton, Western Australia.</p>
      </stack-section>
      <stack-section headline="Air Freight" subtitle="13/11/2024" variant="primary">
        <p>To guarantee freshness, our rock lobsters kept in saltwater tanks after catchment</p>
        <stack-section-block-image url="/rock-lobster.jpg"></stack-section-block-image>
      </stack-section>
    </stack-layout>
  `,
} as Meta;

export const Default = {};
