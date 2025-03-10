import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'call-to-action',
  styleUrl: 'call-to-action.css',
  shadow: false,
})
export class CallToAction {
  @Prop() href: string = '#';

  render() {
    return (
      <Host>
        <a style={{ textDecoration: 'none' }} href={this.href} target="_blank" rel="noopener noreferrer" class={`call-to-action button-filled`}>
          <p class="md-typescale-body-large call-to-action">
            <slot></slot>
          </p>
        </a>
      </Host>
    );
  }
}
