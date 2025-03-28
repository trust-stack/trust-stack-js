import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './trust-provenance-footer';
import type { TrustProvenanceFooter } from './trust-provenance-footer';

export default {
  title: 'Trust Provenance Footer',
  component: 'trust-provenance-footer',
  render: () => html`
    <div style="width: 400px; height: 80px;">
      <trust-provenance-footer />
    </div>
  `,
} as Meta<TrustProvenanceFooter>;

export const Default = {} satisfies StoryObj<TrustProvenanceFooter>;
