import {
  CreateBioLock,
  createBioLock,
  getBioLock,
  GetBioLockData,
  getBioLocks,
  RequestOptions,
  TrustStackClient,
} from "@truststack/core";

export class BioLockClient extends TrustStackClient {
  /**
   * Create a bio lock
   * @param props - The properties of the bio lock
   * @param options - The request options
   * @returns The created bio lock
   */
  public async createBioLock(props: CreateBioLock, options?: RequestOptions) {
    return createBioLock({
      body: props,
      headers: this.headers(options),
      client: this.client,
    });
  }

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

  /**
   * Get bio locks
   * @param query - The query parameters
   * @param options - The request options
   * @returns The bio locks
   */
  public async getBioLocks(
    query: GetBioLockData["query"],
    options?: RequestOptions
  ) {
    return getBioLocks({
      query,
      headers: this.headers(options),
      client: this.client,
    });
  }
}
