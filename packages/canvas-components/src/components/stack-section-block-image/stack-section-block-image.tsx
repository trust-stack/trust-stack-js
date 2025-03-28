import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'stack-section-block-image',
  styleUrl: 'stack-section-block-image.css',
  shadow: false,
})
export class StackSectionBlockImage {
  @Prop() url: string;
  // Optional prop for max height (default 400px)
  @Prop() maxHeight: number = 400;

  render() {
    return (
      <Host>
        <div class="container" style={{ maxHeight: `${this.maxHeight}px` }}>
          <img
            src={this.url}
            alt="Stack Section Block Image"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
            }}
          />
        </div>
      </Host>
    );
  }
}
