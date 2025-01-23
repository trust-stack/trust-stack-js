import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'stack-section-block-image',
  styleUrl: 'stack-section-block-image.css',
  shadow: false,
})
export class StackSectionBlockImage {
  @Prop() url: string;

  render() {
    return (
      <Host>
        <div class="container">
          <img src={this.url} alt="Stack Section Block Image" />
        </div>
      </Host>
    );
  }
}
