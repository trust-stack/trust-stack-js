import {
  CreateLocation,
  createLocation,
  getLocation,
  getLocations,
  GetLocationsData,
  RequestOptions,
  TrustStackClient,
} from "@truststack/core";

export class LocationClient extends TrustStackClient {
  /**
   * Create a location
   * @param props - The properties of the location
   * @param options - The request options
   * @returns The created location
   */
  public async createLocation(props: CreateLocation, options?: RequestOptions) {
    return createLocation({
      body: props,
      headers: TrustStackClient.headers(options),
    });
  }

  /**
   * Get a location
   * @param id - The ID of the location
   * @param options - The request options
   * @returns The location
   */
  public async getLocation(id: string, options?: RequestOptions) {
    return getLocation({
      path: {id},
      headers: TrustStackClient.headers(options),
    });
  }

  /**
   * Get locations
   * @param query - The query parameters
   * @param options - The request options
   * @returns The locations
   */
  public async getLocations(
    query: GetLocationsData["query"],
    options?: RequestOptions
  ) {
    return getLocations({
      query,
      headers: TrustStackClient.headers(options),
    });
  }
}
