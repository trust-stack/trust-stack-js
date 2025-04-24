import {
  createDpp,
  CreateDppDto,
  deleteDpp,
  getDpp,
  RequestOptions,
  TrustStackClient,
} from "@truststack/core";

export class DppClient extends TrustStackClient {
  /**
   * Create a DPP.
   * @param data - The data to create the DPP.
   * @returns The created DPP.
   */
  public async createDpp(data: CreateDppDto, options?: RequestOptions) {
    return createDpp({
      body: data,
      headers: this.headers(options),
    });
  }

  /**
   * Get a DPP.
   * @param id - The id of the DPP.
   * @returns The DPP.
   */
  public async getDpp(id: string, options?: RequestOptions) {
    return getDpp({
      path: {id},
      headers: this.headers(options),
    });
  }

  /**
   * Delete a DPP.
   * @param id - The id of the DPP.
   * @returns The deleted DPP.
   */
  public async deleteDpp(id: string, options?: RequestOptions) {
    return deleteDpp({
      path: {id},
      headers: this.headers(options),
    });
  }
}
