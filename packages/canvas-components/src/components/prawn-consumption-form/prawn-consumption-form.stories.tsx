import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './prawn-consumption-form';
import type { PrawnConsumptionForm } from './prawn-consumption-form';

export default {
  title: 'Prawn Consumption Form',
  component: 'prawn-consumption-form',
  render: args => html`
    <div style="width: 400px; height: 600px;">
      <script>
        document.querySelector('prawn-consumption-form').items = ${JSON.stringify(args)};
      </script>
      <prawn-consumption-form />
    </div>
  `,
} as Meta<PrawnConsumptionForm>;

export const Default = {
  args: {},
} satisfies StoryObj<PrawnConsumptionForm>;
