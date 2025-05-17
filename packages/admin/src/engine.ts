import {
  getAppEntryOrganization,
  getAppThemeOrganization,
  RequestOptions,
  SetAppEntry,
  setAppEntryOrganization,
  SetAppTheme,
  setAppThemeOrganization,
  TrustStackClient,
} from "@truststack/core";

export class EngineClient extends TrustStackClient {
  /**
   * Set the app entry organization
   * @param props - The app entry organization
   * @param options - The request options
   * @returns The app entry organization
   */
  public async setAppEntryOrganization(
    props: SetAppEntry,
    options?: RequestOptions
  ) {
    return setAppEntryOrganization({
      body: props,
      headers: this.headers(options),
      client: this.client,
    });
  }

  /**
   * Get the app entry organization
   * @param options - The request options
   * @returns The app entry organization
   */
  public async getAppEntryOrganization(options?: RequestOptions) {
    return getAppEntryOrganization({
      headers: this.headers(options),
      client: this.client,
    });
  }

  /**
   * Get the app theme organization
   * @param options - The request options
   * @returns The app theme organization
   */
  public async getAppThemeOrganization(options?: RequestOptions) {
    return getAppThemeOrganization({
      headers: this.headers(options),
      client: this.client,
    });
  }

  /**
   * Set the app theme organization
   * @param props - The app theme organization
   * @param options - The request options
   * @returns The app theme organization
   */
  public async setAppThemeOrganization(
    props: SetAppTheme,
    options?: RequestOptions
  ) {
    return setAppThemeOrganization({
      body: props,
      headers: this.headers(options),
      client: this.client,
    });
  }
}
