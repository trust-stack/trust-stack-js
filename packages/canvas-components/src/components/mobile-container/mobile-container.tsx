import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'mobile-container',
  styleUrl: 'mobile-container.css',
  shadow: true,
})
export class MobileContainer {
  render() {
    return (
      <Host>
        <div class="mobile-container">
          <div class="mobile-container-content">
            <slot></slot>
          </div>
        </div>
      </Host>
    );
  }
}
