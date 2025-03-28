import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './stack-section-footer-socials';
import type { StackSectionFooterSocials } from './stack-section-footer-socials';

export default {
  title: 'Stack Section Footer Socials',
  component: 'stack-section-footer-socials',
  render: args => html`
    <div style="width: 400px; height: 100px;">
      <stack-section-footer-socials
        facebook=${args.facebook}
        instagram=${args.instagram}
        x=${args.x}
        linkedin=${args.linkedin}
        youtube=${args.youtube}
        website=${args.website}
      ></stack-section-footer-socials>
    </div>
  `,
} as Meta<StackSectionFooterSocials>;

export const Default = {
  args: {
    facebook: 'https://google.com',
    instagram: 'https://google.com',
    x: 'https://google.com',
    linkedin: 'https://google.com',
    youtube: 'https://google.com',
    website: 'https://google.com',
  },
} satisfies StoryObj<StackSectionFooterSocials>;
