import {
  getAppFrame,
  getAppThemeOrganization,
  RequestOptions,
  setAppFrame,
  SetAppFrame,
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
  public async setAppFrame(props: SetAppFrame, options?: RequestOptions) {
    return setAppFrame({
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
  public async getAppFrame(id: string, options?: RequestOptions) {
    return getAppFrame({
      headers: this.headers(options),
      client: this.client,
    });
  }

  /**
   * Set the app theme
   * @param props - The app theme
   * @param options - The request options
   * @returns The app theme
   */
  public async setAppTheme(props: SetAppTheme, options?: RequestOptions) {
    return setAppThemeOrganization({
      body: props,
      headers: this.headers(options),
      client: this.client,
    });
  }

  /**
   * Get the app theme
   * @param options - The request options
   * @returns The app theme
   */
  public async getAppTheme(options?: RequestOptions) {
    return getAppThemeOrganization({
      headers: this.headers(options),
      client: this.client,
    });
  }
}
