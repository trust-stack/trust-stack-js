import {getBioLock, RequestOptions, TrustStackClient} from "@truststack/core";

export class BioLockClient extends TrustStackClient {
  /**
   * Get a bio lock
   * @param id - The ID of the bio lock
   * @param options - The request options
   * @returns The bio lock
   */
  public async getBioLock(id: string, options?: RequestOptions) {
    return getBioLock({
      path: {id},
      headers: this.headers(options),
      client: this.client,
    });
  }
}
