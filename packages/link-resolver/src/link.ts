import {
  createLink,
  CreateLink,
  deleteLink,
  RequestOptions,
  TrustStackClient,
} from "@truststack/core";

export class LinkClient extends TrustStackClient {
  /**
   * Add a link
   * @param data - The link to add
   * @param options - The request options
   * @returns The added link
   */
  public async addLink(data: CreateLink, options?: RequestOptions) {
    return createLink({
      body: data,
      headers: this.headers(options),
      client: this.client,
    });
  }

  /**
   * Delete a link
   * @param id - The ID of the link
   * @param options - The request options
   * @returns The deleted link
   */
  public async deleteLink(id: string, options?: RequestOptions) {
    return deleteLink({
      path: {id},
      headers: this.headers(options),
      client: this.client,
    });
  }
}
