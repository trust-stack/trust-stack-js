import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'logo-grid',
  styleUrl: 'logo-grid.css',
  shadow: true,
})
export class LogoGrid {
  @Prop() items: LogoGridItem[] = [];
  @Prop() itemHeight: number = 100;

  render() {
    return (
      <Host>
        <div class="grid">
          {this.items.map(item => (
            <div class="grid-item grid-item-6" style={{ maxHeight: `${this.itemHeight}px`, height: `${this.itemHeight}px` }}>
              <img src={item.src} alt={item.alt} style={{ maxHeight: `100%`, height: `100%` }} />
            </div>
          ))}
        </div>
      </Host>
    );
  }
}

export type LogoGridItem = {
  src: string;
  alt?: string;
};
