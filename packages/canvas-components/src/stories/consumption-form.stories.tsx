import { Meta } from '@storybook/web-components';
import { html } from 'lit';

// Component imports
import '../components/seafood-header/seafood-header';
import '../components/logo-grid/logo-grid';
import '../components/stack-layout/stack-layout';
import '../components/stack-product-header/stack-product-header';
import '../components/stack-section-block-image/stack-section-block-image';
import '../components/stack-section-block-video/stack-section-block-video';
import '../components/stack-section-footer-socials/stack-section-footer-socials';
import '../components/stack-section-map/stack-section-map';
import '../components/stack-section/stack-section';
import '../components/trust-provenance-footer/trust-provenance-footer';

export default {
  name: 'Consumption Form',
  render: () => {
    const mapMarkers = JSON.stringify([[134.4647, -33.717007]]);

    return html`
      <script>
        document.addEventListener('DOMContentLoaded', () => {
          const mapEl = document.querySelector('stack-section-map');
          if (mapEl) {
            mapEl.markers = ${mapMarkers};
          }
        });
      </script>

      <mobile-container>
        <stack-layout>
          <seafood-header
            .headline=${['Welcome', 'Domestic Wholesale', 'International Exports', 'Fresh Local Produce']}
            subheader="From nature’s most pristine estuary and oceans, Clarence River Fishermen’s Co-operative (CRFC) members harvest an array of commercial seafood species that appeal to seafood lovers around the globe."
            image="https://crfc.com.au/wp-content/uploads/2025/03/CRT145.jpg"
            height="300"
          ></seafood-header>

          <stack-section>
            <stack-product-header headline="" image-url="prawn-carton.png"></stack-product-header>
          </stack-section>

          <stack-section headline="Caught" variant="surface-lowest">
            <p style="font-family: 'Open Sans', Helvetica, Arial, sans-serif; font-size: 1.125rem; line-height: 1.6; color: #6e6e6e; font-weight: 400; margin-bottom: 1.5rem;">
              Freshly caught prawns off the pristine waters of northern Queensland, Australia, mark another quality catch for CRFC (Coral Reef Fish Company). This batch was landed
              near latitude -16.9203° S and longitude 145.7700° E, just off the coast of Cairns. With a commitment to sustainability and excellence, CRFC ensures that each prawn is
              handled with care and packed at peak freshness—bringing the taste of Australia’s reef waters to seafood lovers across the country and beyond.
            </p>
          </stack-section>

          <stack-section>
            <stack-section-map zoom="4" access-token=${(import.meta as any).env.STORYBOOK_MAPBOX_ACCESS_TOKEN} height="400"></stack-section-map>
          </stack-section>

          <stack-section headline="Received" variant="surface-lowest">
            <p style="font-family: 'Open Sans', Helvetica, Arial, sans-serif; font-size: 1.125rem; line-height: 1.6; color: #6e6e6e; font-weight: 400; margin-bottom: 1.5rem;">
              Received and dispatched with care by Coral Reef Fish Company (CRFC), Australia — This premium batch of wild-caught prawns was landed off the coast of Cairns at
              latitude -16.9203° S, longitude 145.7700° E. After a quality check at our coastal facility, the prawns were promptly packed and dispatched under strict cold-chain
              protocols, ensuring peak freshness from ocean to destination. Trusted by seafood distributors worldwide, CRFC guarantees excellence in every delivery.
            </p>
          </stack-section>

          <stack-section>
            <stack-section-block-image url="prawns-catch.png"></stack-section-block-image>
          </stack-section>

          <stack-section>
            <prawn-consumption-form></prawn-consumption-form>
          </stack-section>

          <stack-section>
            <stack-section-footer-socials
              facebook="https://google.com"
              instagram="https://google.com"
              x="https://google.com"
              linkedin="https://google.com"
              youtube="https://google.com"
              website="https://google.com"
            ></stack-section-footer-socials>
          </stack-section>

          <trust-provenance-footer></trust-provenance-footer>
        </stack-layout>
      </mobile-container>
    `;
  },
} as Meta;

export const Default = {};
