import {
  createDid,
  CreateDid,
  deleteDid,
  getDid,
  getDids,
  GetDidsData,
  RequestOptions,
  TrustStackClient,
} from "@truststack/core";

export class DidClient extends TrustStackClient {
  /**
   * Create a DID
   * @param props - The properties of the DID
   * @param options - The request options
   * @returns The created DID
   */
  public async createDid(props: CreateDid, options?: RequestOptions) {
    return createDid({
      body: {
        name: props.name,
      },
      headers: this.headers(options),
      client: this.client,
    });
  }

  /**
   * Delete a DID
   * @param id - The ID of the DID
   * @param options - The request options
   * @returns The deleted DID
   */
  public async deleteDid(id: string, options?: RequestOptions) {
    return deleteDid({
      path: {
        id,
      },
      headers: this.headers(options),
      client: this.client,
    });
  }

  /**
   * Get a DID
   * @param id - The ID of the DID
   * @param options - The request options
   * @returns The DID
   */
  public async getDid(id: string, options?: RequestOptions) {
    return getDid({
      path: {
        id,
      },
      headers: this.headers(options),
      client: this.client,
    });
  }

  /**
   * Get all DIDs for the requested organization.
   * @param query - The query parameters
   * @param options - The request options
   * @returns The DIDs
   */
  public async getDids(query: GetDidsData["query"], options?: RequestOptions) {
    return getDids({
      query,
      headers: this.headers(options),
      client: this.client,
    });
  }
}
