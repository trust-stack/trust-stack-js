import { Component, h, Host, Prop, State } from '@stencil/core';

declare global {
  interface Window {
    mapboxgl: any;
  }
}

@Component({
  tag: 'stack-section-map',
  styleUrl: 'stack-section-map.css',
  shadow: false,
})
export class StackSectionMap {
  @State() private mapInstance: any;
  private mapContainer: HTMLDivElement;

  @Prop() accessToken: string;
  @Prop() zoom: number = 1;
  @Prop() height: number = 400;
  @Prop() center: [number, number] = [0, 0];
  @Prop() markers: [number, number][] = [];
  @Prop() style: 'streets-v12' | 'outdoors-v12' | 'light-v11' | 'dark-v11' | 'satellite-v9' | 'satellite-streets-v12' | 'navigation-day-v1' | 'navigation-night-v1' = 'light-v11';
  @Prop() markerColor: `var(--md-sys-color-${string})` = 'var(--md-sys-color-primary)';

  private markerInstances: any[] = [];

  private async loadMapboxResources() {
    if (window.mapboxgl) return;

    // Load CSS
    const linkEl = document.createElement('link');
    linkEl.rel = 'stylesheet';
    linkEl.href = 'https://api.mapbox.com/mapbox-gl-js/v3.3.0/mapbox-gl.css';
    document.head.appendChild(linkEl);

    // Load and wait for the script
    await new Promise((resolve, reject) => {
      const scriptEl = document.createElement('script');
      scriptEl.src = 'https://api.mapbox.com/mapbox-gl-js/v3.3.0/mapbox-gl.js';
      scriptEl.onload = resolve;
      scriptEl.onerror = reject;
      document.head.appendChild(scriptEl);
    });
  }

  async componentDidLoad() {
    await this.loadMapboxResources();

    if (!this.accessToken) {
      console.error('Mapbox access token is required');
      return;
    }

    window.mapboxgl.accessToken = this.accessToken;
    this.mapInstance = new window.mapboxgl.Map({
      container: this.mapContainer,
      style: STYLE_MAP[this.style],
      center: this.center,
      zoom: this.zoom,
    });

    // Wait for both map load and style load before adding markers
    this.mapInstance.on('style.load', () => {
      this.addMarkers();
    });
  }

  private addMarkers() {
    // Clear existing markers
    this.markerInstances.forEach(marker => marker.remove());
    this.markerInstances = [];

    // Add new markers
    this.markers.forEach(coordinates => {
      const marker = new window.mapboxgl.Marker({
        color: this.markerColor,
      })
        .setLngLat(coordinates)
        .addTo(this.mapInstance);
      this.markerInstances.push(marker);
    });

    // Fit map to markers if there are any
    if (this.markers.length > 0) {
      const bounds = new window.mapboxgl.LngLatBounds();
      this.markers.forEach(coordinates => {
        bounds.extend(coordinates);
      });

      this.mapInstance.fitBounds(bounds, {
        padding: 50, // Add some padding around the markers
        maxZoom: this.zoom, // Prevent zooming in too close
      });
    }
  }

  disconnectedCallback() {
    // Remove markers before removing map
    this.markerInstances.forEach(marker => marker.remove());
    if (this.mapInstance) {
      this.mapInstance.remove();
    }
  }

  render() {
    return (
      <Host>
        <div class="container" style={{ height: `${this.height}px` }}>
          <div ref={el => (this.mapContainer = el)} style={{ width: '100%', height: '100%' }} />
        </div>
      </Host>
    );
  }
}

const STYLE_MAP = {
  'streets-v12': 'mapbox://styles/mapbox/streets-v12',
  'outdoors-v12': 'mapbox://styles/mapbox/outdoors-v12',
  'light-v11': 'mapbox://styles/mapbox/light-v11',
  'dark-v11': 'mapbox://styles/mapbox/dark-v11',
  'satellite-v9': 'mapbox://styles/mapbox/satellite-v9',
  'satellite-streets-v12': 'mapbox://styles/mapbox/satellite-streets-v12',
  'navigation-day-v1': 'mapbox://styles/mapbox/navigation-day-v1',
  'navigation-night-v1': 'mapbox://styles/mapbox/navigation-night-v1',
};
