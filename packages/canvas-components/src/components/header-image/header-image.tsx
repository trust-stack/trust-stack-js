import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'header-image',
  styleUrl: 'header-image.css',
  shadow: false,
})
export class HeaderImage {
  @Prop() image: string;
  @Prop() headline: string;
  @Prop() subheader: string;

  render() {
    return (
      <Host>
        <div class="header-container">
          <div class="image-container">
            <img src={this.image} alt="Header background" />
          </div>
          <div class="text-overlay brand">
            <p class="md-typescale-title-large">{this.subheader}</p>
            <h1 class="md-typescale-headline-large">{this.headline}</h1>
          </div>
        </div>
      </Host>
    );
  }
}
