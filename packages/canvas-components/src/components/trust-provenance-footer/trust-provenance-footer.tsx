import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'trust-provenance-footer',
  styleUrl: 'trust-provenance-footer.css',
  shadow: false,
})
export class TrustProvenanceFooter {
  render() {
    return (
      <Host>
        <div class="trust-provenance-footer-container">
          <a href="https://trustprovenance.com" target="_blank" rel="noopener noreferrer">
            <svg class="trust-provenance-footer-container-svg">
              <g>
                <path
                  class="cls-1"
                  d="M25.29,17.1c-4.51,0-8.19,3.67-8.19,8.19s3.67,8.19,8.19,8.19,8.19-3.67,8.19-8.19v-8.19h-8.19Zm4.64,8.19c0,2.56-2.08,4.64-4.64,4.64s-4.64-2.08-4.64-4.64,2.08-4.64,4.64-4.64h4.64v4.64Zm-22.52,.78c-1.85-1.85-3.02-4.11-3.54-6.5H.26c.56,3.3,2.1,6.46,4.64,9,3.16,3.16,7.36,4.9,11.84,4.9,.22,0,.43,0,.65-.02-1.08-1.04-1.95-2.29-2.55-3.68-2.8-.4-5.39-1.68-7.42-3.71ZM26.07,7.41c1.81,1.81,3.02,4.05,3.55,6.5h3.62c-.58-3.39-2.18-6.52-4.66-9C25.41,1.74,21.21,0,16.74,0c-.22,0-.43,0-.65,.02,1.08,1.04,1.95,2.29,2.55,3.68,2.8,.4,5.39,1.68,7.42,3.71Zm-9.69,.78C16.38,3.67,12.7,0,8.19,0S0,3.67,0,8.19v8.19H8.19c4.52,0,8.19-3.67,8.19-8.19Zm-12.83,0c0-2.56,2.08-4.64,4.64-4.64s4.64,2.08,4.64,4.64-2.08,4.64-4.64,4.64H3.55v-4.64Z"
                />
              </g>
            </svg>
          </a>
          <p class="md-typescale-body-medium">Powered by Trust Provenance</p>
        </div>
      </Host>
    );
  }
}
