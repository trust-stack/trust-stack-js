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
  private markerInstances: any[] = [];
  private polygonLayerId: string = 'polygon-layer';

  @Prop() accessToken: string;
  @Prop() zoom: number = 1;
  @Prop() height: number = 400;
  @Prop() center: [number, number] = [0, 0];
  @Prop() markers: [number, number][] = [];
  @Prop() mapStyle: 'streets-v12' | 'outdoors-v12' | 'light-v11' | 'dark-v11' | 'satellite-v9' | 'satellite-streets-v12' | 'navigation-day-v1' | 'navigation-night-v1' =
    'light-v11';
  @Prop() markerColor: `var(--md-sys-color-${string})` = 'var(--md-sys-color-primary)';
  @Prop() polygonColor: `var(--md-sys-color-${string})` = 'var(--md-sys-color-primary)';
  @Prop() polygon?: Polygon;

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
      style: STYLE_MAP[this.mapStyle],
      center: this.center,
      zoom: this.zoom,
    });

    // Wait for both map load and style load before adding markers and polygon
    this.mapInstance.on('style.load', () => {
      this.addMarkers();

      this.addPolygon();
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

  private addPolygon() {
    // Remove existing layers if they exist
    if (this.mapInstance.getLayer(this.polygonLayerId)) {
      this.mapInstance.removeLayer(this.polygonLayerId);
      this.mapInstance.removeLayer(`${this.polygonLayerId}-label`);
      this.mapInstance.removeSource(this.polygonLayerId);
    }

    const computedColor = getComputedStyle(document.documentElement).getPropertyValue(this.polygonColor.replace('var(', '').replace(')', '')).trim();

    // Calculate the center point of the polygon for label placement
    const bounds = new window.mapboxgl.LngLatBounds();
    this.polygon.coordinates.forEach(coordinate => {
      bounds.extend(coordinate);
    });
    const center = bounds.getCenter();

    // Add the polygon data as a source
    this.mapInstance.addSource(this.polygonLayerId, {
      type: 'geojson',
      data: {
        type: 'Feature',
        properties: {
          label: this.polygon.label,
          center: [center.lng, center.lat],
        },
        geometry: {
          type: 'Polygon',
          coordinates: [this.polygon.coordinates],
        },
      },
    });

    // Add the polygon fill layer
    this.mapInstance.addLayer({
      id: this.polygonLayerId,
      type: 'fill',
      source: this.polygonLayerId,
      paint: {
        'fill-color': computedColor,
        'fill-opacity': 0.3,
        'fill-outline-color': computedColor,
      },
    });

    // Add the label layer
    this.mapInstance.addLayer({
      id: `${this.polygonLayerId}-label`,
      type: 'symbol',
      source: this.polygonLayerId,
      layout: {
        'text-field': ['get', 'label'],
        'text-anchor': 'center',
        'text-size': 12,
        'text-justify': 'center',
        'text-offset': [0, 0],
      },
      paint: {
        'text-color': computedColor,
        'text-halo-color': '#ffffff',
        'text-halo-width': 2,
      },
    });

    // Fit map to polygon bounds
    this.mapInstance.fitBounds(bounds, {
      padding: 100,
    });
  }

  disconnectedCallback() {
    // Remove both layers before removing map
    if (this.mapInstance?.getLayer(this.polygonLayerId)) {
      this.mapInstance.removeLayer(this.polygonLayerId);
      this.mapInstance.removeLayer(`${this.polygonLayerId}-label`);
      this.mapInstance.removeSource(this.polygonLayerId);
    }
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

export type Polygon = {
  readonly coordinates: [number, number][];
  readonly label: string;
};
