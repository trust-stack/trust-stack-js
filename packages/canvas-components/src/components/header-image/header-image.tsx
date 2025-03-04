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
  @Prop() height?: number = 200;
  @Prop() imageBlur?: number = 2;

  render() {
    return (
      <Host>
        <div class="header-container" style={{ height: `${this.height}px` }}>
          <div class="image-container">
            <img src={this.image} alt="Header background" style={{ filter: `blur(${this.imageBlur}px)` }} />
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
