import { Component, Host, Prop, h } from '@stencil/core';
import { loadFontAwesome } from '../../utils/load-external-resource';

@Component({
  tag: 'stack-product-header',
  styleUrl: 'stack-product-header.css',
  shadow: false,
})
export class StackProductHeader {
  @Prop() headline: string;
  @Prop() imageUrl: string;

  async componentDidLoad() {
    await loadFontAwesome();
  }

  render() {
    return (
      <Host>
        <div class="stack-producer-header">
          <div>
            <div class="stack-product-header-supporting-text-container">
              <span class="icon">
                <p class="fa fa-qrcode" />
              </span>
              <p class="md-typescale-title-medium stack-product-header-supporting-text">You have scanned</p>
            </div>

            <h2 class="md-typescale-headline-large stack-product-header-headline">{this.headline}</h2>
          </div>

          <img class="stack-product-header-image" src={this.imageUrl} />
          <p class="md-typescale-body-large stack-product-header-message">Here is how it got here</p>
        </div>
        <slot></slot>
      </Host>
    );
  }
}
