import {
  getTrustGraph,
  RequestOptions,
  TrustStackClient,
} from "@truststack/core";

export class DiscoveryClient extends TrustStackClient {
  /**
   * Get a trust graph by id
   * @param id - The id of the trust graph
   * @param options - The request options
   * @returns The trust graph
   */
  public async getTrustGraph(id: string, options?: RequestOptions) {
    return getTrustGraph({
      path: {
        id,
      },
      headers: this.headers(options),
      client: this.client,
    });
  }
}
