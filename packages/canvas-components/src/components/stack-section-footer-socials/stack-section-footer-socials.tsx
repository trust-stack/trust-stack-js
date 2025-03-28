import { Component, Host, Prop, h } from '@stencil/core';
import { loadFontAwesome } from '../../utils/load-external-resource';

@Component({
  tag: 'stack-section-footer-socials',
  styleUrl: 'stack-section-footer-socials.css',
  shadow: false,
})
export class StackSectionFooterSocials {
  @Prop() facebook?: string;
  @Prop() instagram?: string;
  @Prop() x?: string;
  @Prop() linkedin?: string;
  @Prop() youtube?: string;
  @Prop() website?: string;

  async componentDidLoad() {
    await loadFontAwesome();
  }

  render() {
    return (
      <Host>
        <div class="stack-section-footer-socials-container">
          {this.facebook && (
            <span class="icon">
              <a href={this.facebook} class="fa fa-facebook" target="_blank" rel="noopener noreferrer" />
            </span>
          )}
          {this.instagram && (
            <span class="icon">
              <a href={this.instagram} class="fa fa-instagram" target="_blank" rel="noopener noreferrer" />
            </span>
          )}
          {this.x && (
            <span class="icon">
              <a href={this.x} class="fa fa-twitter" target="_blank" rel="noopener noreferrer" />
            </span>
          )}
          {this.linkedin && (
            <span class="icon">
              <a href={this.linkedin} class="fa fa-linkedin" target="_blank" rel="noopener noreferrer" />
            </span>
          )}
          {this.youtube && (
            <span class="icon">
              <a href={this.youtube} class="fa fa-youtube" target="_blank" rel="noopener noreferrer" />
            </span>
          )}
          {this.website && (
            <span class="icon">
              <a href={this.website} class="fa fa-globe" target="_blank" rel="noopener noreferrer" />
            </span>
          )}
        </div>
      </Host>
    );
  }
}
