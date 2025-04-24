import {
  createLinkSet,
  CreateLinkSet,
  deleteLinkSet,
  getLinkSet,
  getLinkSets,
  RequestOptions,
  TrustStackClient,
} from "@truststack/core";

export class LinkSetClient extends TrustStackClient {
  /**
   * Create a link set
   * @param props - The properties of the link set
   * @param options - The request options
   * @returns The created link set
   */
  public async createLinkSet(props: CreateLinkSet, options?: RequestOptions) {
    return createLinkSet({
      body: props,
      headers: TrustStackClient.headers(options),
    });
  }

  /**
   * Get a link set
   * @param id - The ID of the link set
   * @param options - The request options
   * @returns The link set
   */
  public async getLinkSet(id: string, options?: RequestOptions) {
    return getLinkSet({
      path: {id},
      headers: TrustStackClient.headers(options),
    });
  }

  /**
   * Get link sets
   * @param options - The request options
   * @returns The link sets
   */
  public async getLinkSets(options?: RequestOptions) {
    return getLinkSets({
      headers: TrustStackClient.headers(options),
    });
  }

  /**
   * Delete a link set
   * @param id - The ID of the link set
   * @param options - The request options
   * @returns The deleted link set
   */
  public async deleteLinkSet(id: string, options?: RequestOptions) {
    return deleteLinkSet({
      path: {id},
      headers: TrustStackClient.headers(options),
    });
  }
}
