import {
  getPolicies,
  GetPoliciesData,
  getPolicyById,
  RequestOptions,
  TrustStackClient,
} from "@truststack/core";

export class PolicyClient extends TrustStackClient {
  /**
   * Get a policy by id
   * @param id - The id of the policy
   * @param options - The request options
   * @returns The policy
   */
  public async getPolicy(id: string, options?: RequestOptions) {
    return getPolicyById({
      path: {id},
      headers: this.headers(options),
      client: this.client,
    });
  }

  /**
   * Get policies
   * @param query - The query parameters
   * @param options - The request options
   * @returns The policies
   */
  public async getPolicies(
    query: GetPoliciesData["query"],
    options?: RequestOptions
  ) {
    return getPolicies({
      query,
      headers: this.headers(options),
      client: this.client,
    });
  }
}
