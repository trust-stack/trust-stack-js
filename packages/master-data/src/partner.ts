import {
  CreatePartner,
  createPartner,
  getPartners,
  GetPartnersData,
  RequestOptions,
  TrustStackClient,
} from "@truststack/core";

export class PartnerClient extends TrustStackClient {
  /**
   * Create a partner
   * @param props - The properties of the partner
   * @param options - The request options
   * @returns The created partner
   */
  public async createPartner(props: CreatePartner, options?: RequestOptions) {
    return createPartner({
      body: props,
      headers: this.headers(options),
    });
  }

  /**
   * Get partners
   * @param query - The query parameters
   * @param options - The request options
   * @returns The partners
   */
  public async getPartners(
    query: GetPartnersData["query"],
    options?: RequestOptions
  ) {
    return getPartners({
      query,
      headers: this.headers(options),
    });
  }
}
