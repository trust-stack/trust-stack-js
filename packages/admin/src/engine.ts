import {
  getAppFrame,
  RequestOptions,
  setAppFrame,
  SetAppFrame,
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
}
