import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'stack-layout',
  styleUrl: 'stack-layout.css',
  shadow: false,
})
export class StackLayout {
  @Prop() overlap: number = 32; // Default overlap in pixels

  render() {
    return (
      <Host>
        <div class={`stack-container`} style={{ '--overlap': `${this.overlap}px` }}>
          <slot />
        </div>
      </Host>
    );
  }
}
