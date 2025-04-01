import { Component, h, Host, Prop, State } from '@stencil/core';

@Component({
  tag: 'seafood-header',
  styleUrl: 'seafood-header.css',
  shadow: false,
})
export class SeafoodHeader {
  @Prop() image: string;
  @Prop() headline: string[] = ['Welcome', 'Domestic Wholesale', 'International Exports', 'Fresh Local Produce'];
  @Prop() subheader: string;
  @Prop() height?: number = 200;
  @State() rotatingTextIndex: number = 0;
  @State() isAnimating: boolean = false;

  intervalId: any;

  componentDidLoad() {
    this.intervalId = setInterval(() => {
      this.isAnimating = true;

      setTimeout(() => {
        this.rotatingTextIndex = (this.rotatingTextIndex + 1) % this.headline.length;
        this.isAnimating = false;
      }, 600); // match the CSS animation duration
    }, 3000);
  }

  disconnectedCallback() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <Host>
        <div class="header-container" style={{ height: `${this.height}px` }}>
          <div class="image-container">
            <img src={this.image} alt="Header background" />
          </div>
          <div class="text-overlay brand">
            <h2 class="hero-large-text">
              <span class="flip-container">
                <span class={`flip-inner ${this.isAnimating ? 'flipping' : ''}`}>
                  <span class="flip-front">{this.headline[this.rotatingTextIndex]}</span>
                </span>
              </span>
            </h2>
            <p class="italic">{this.subheader}</p>
          </div>
        </div>
      </Host>
    );
  }
}
