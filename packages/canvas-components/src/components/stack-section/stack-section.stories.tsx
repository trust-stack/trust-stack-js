import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './stack-section';
import type { StackSection } from './stack-section';

export default {
  title: 'Stack Section',
  component: 'stack-section',
  render: args =>
    html`<stack-section headline=${args.headline} subtitle=${args.subtitle} variant=${args.variant}>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
    </stack-section>`,
} as Meta<StackSection>;

export const Default = {
  args: {
    headline: 'Headline',
    subtitle: 'Subtitle',
  },
} satisfies StoryObj<StackSection>;

export const Primary = {
  args: {
    headline: 'Primary Headline',
    subtitle: 'Subtitle',
    variant: 'primary',
  },
} satisfies StoryObj<StackSection>;

export const Secondary = {
  args: {
    headline: 'Secondary Headline',
    subtitle: 'Subtitle',
    variant: 'secondary',
  },
} satisfies StoryObj<StackSection>;

export const Tertiary = {
  args: {
    headline: 'Tertiary Headline',
    subtitle: 'Subtitle',
    variant: 'tertiary',
  },
} satisfies StoryObj<StackSection>;

export const Surface = {
  args: {
    headline: 'Surface Headline',
    subtitle: 'Subtitle',
    variant: 'surface',
  },
} satisfies StoryObj<StackSection>;

export const SurfaceVariant = {
  args: {
    headline: 'Surface Variant Headline',
    subtitle: 'Subtitle',
    variant: 'surface-variant',
  },
} satisfies StoryObj<StackSection>;
