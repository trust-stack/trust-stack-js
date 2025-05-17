import {
  RequestOptions,
  SetAppEntry,
  setAppEntryOrganization,
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
}
