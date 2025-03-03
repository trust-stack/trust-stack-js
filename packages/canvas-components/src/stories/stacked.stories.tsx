import { Meta } from '@storybook/web-components';
import { html } from 'lit';
import '../components/header-image/header-image';
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
  name: 'Examples/Stacked',
  render: () => html`
    <script>
      document.querySelector('stack-section-map').markers = ${JSON.stringify([[134.4647, -33.717007]])};
    </script>
    <stack-layout>
      <header-image subheader="ROCK LOBSTER" headline="A taste of our country" image="/ocean-banner.jpg"></header-image>

      <stack-section>
        <stack-product-header
          headline="Rock Lobster"
          image-url="https://i0.wp.com/eyrewoolfabalone.com.au/wp-content/uploads/2021/04/Eyrewoolf-Abalone-Products-Square-Crop-19-13.jpg?fit=1080%2C1080&ssl=1"
        ></stack-product-header>
      </stack-section>

      <stack-section headline="Wild Caught" subtitle="12/12/2024" variant="surface">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </stack-section>

      <stack-section>
        <stack-section-block-video video-id="0f91d08a09ce9cf1089d2624d2ea45dd"></stack-section-block-video>
      </stack-section>

      <stack-section>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </stack-section>

      <stack-section>
        <stack-section-map zoom="4" access-token=${(import.meta as any).env.STORYBOOK_MAPBOX_ACCESS_TOKEN} height="400"></stack-section-map>
      </stack-section>

      <stack-section headline="Air Freight" subtitle="13/11/2024">
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
          architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
          ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
          incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </p>
      </stack-section>

      <stack-section>
        <stack-section-block-image url="/rock-lobster.jpg"></stack-section-block-image>
      </stack-section>

      <stack-section>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
          architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
          ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
          incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </p>
        <script>
          document.querySelector('logo-grid').items = ${JSON.stringify([
            {
              src: '/awa.webp',
            },
            {
              src: '/sapfbia.webp',
            },
          ])};
        </script>
        <logo-grid item-height="80" />
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
  `,
} as Meta;

export const Default = {};
