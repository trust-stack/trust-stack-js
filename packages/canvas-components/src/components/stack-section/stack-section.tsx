import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'stack-section',
  styleUrl: 'stack-section.css',
  shadow: false,
})
export class StackSection {
  @Prop() headline: string;

  @Prop() subtitle: string;

  @Prop() variant?: 'primary' | 'secondary' | 'tertiary' | 'surface' | 'surface-variant';

  render() {
    // Default is surface-container
    const container = this.variant ? `${this.variant}-container` : 'surface-container';

    return (
      <Host>
        <div class={`elevation-5 card br-t-xl ${container}`} style={{ textAlign: 'center' }}>
          <md-elevation></md-elevation>
          {this.headline && <h2 class="md-typescale-headline-small">{this.headline}</h2>}
          {this.subtitle && <p class="md-typescale-title-medium">{this.subtitle}</p>}

          <slot></slot>
        </div>
      </Host>
    );
  }
}
