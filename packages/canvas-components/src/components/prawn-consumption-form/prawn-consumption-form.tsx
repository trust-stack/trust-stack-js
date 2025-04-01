import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'prawn-consumption-form',
  styleUrl: 'prawn-consumption-form.css',
  shadow: true,
})
export class PrawnConsumptionForm {
  @State() accepted: boolean = false;
  @State() lat: number = null;
  @State() lng: number = null;

  componentDidLoad() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      });
    } else {
      console.warn('Geolocation not supported');
    }
  }

  handleCheckboxChange = (event: Event) => {
    this.accepted = (event.target as HTMLInputElement).checked;
  };

  render() {
    return (
      <div class="form-container">
        <h2 class="md-typescale-headline-small">Prawn Consumption Declaration</h2>
        <p class="form-text">By checking this box, I confirm that I have followed all prawn consumption and handling guidelines at my current location.</p>
        {this.lat !== null && this.lng !== null ? (
          <p class="location form-text">
            Location: <strong>{this.lat.toFixed(5)}</strong>° N, <strong>{this.lng.toFixed(5)}</strong>° E
          </p>
        ) : (
          <p class="location form-text">Fetching location...</p>
        )}
        <label class="form-label">
          <input class="form-checkbox" type="checkbox" checked={this.accepted} onInput={this.handleCheckboxChange} />
          <span class="form-text">I have followed the guidelines.</span>
        </label>

        <button class="form-button" disabled={!this.accepted}>
          Submit Declaration
        </button>
      </div>
    );
  }
}
