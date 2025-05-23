import {
  createCredentialIssuerProfile,
  CreateCredentialIssuerProfile,
  deleteCredentialIssuerProfile,
  getCredentialIssuerProfile,
  getCredentialIssuerProfiles,
  GetCredentialIssuerProfilesData,
  RequestOptions,
  TrustStackClient,
} from "@truststack/core";

export class CredentialIssuerProfileClient extends TrustStackClient {
  /**
   * Create a Credential Issuer Profile.
   * @param data - The data to create the Credential Issuer Profile.
   * @returns The created Credential Issuer Profile.
   */
  public async createCredentialIssuerProfile(
    data: CreateCredentialIssuerProfile,
    options?: RequestOptions
  ) {
    return createCredentialIssuerProfile({
      body: data,
      headers: this.headers(options),
      client: this.client,
    });
  }

  /**
   * Delete a Credential Issuer Profile.
   * @param id - The id of the Credential Issuer Profile.
   * @returns The deleted Credential Issuer Profile.
   */
  public async deleteCredentialIssuerProfile(
    id: string,
    options?: RequestOptions
  ) {
    return deleteCredentialIssuerProfile({
      path: {id},
      headers: this.headers(options),
      client: this.client,
    });
  }

  /**
   * Get a Credential Issuer Profile.
   * @param id - The id of the Credential Issuer Profile.
   * @returns The Credential Issuer Profile.
   */
  public async getCredentialIssuerProfile(
    id: string,
    options?: RequestOptions
  ) {
    return getCredentialIssuerProfile({
      path: {id},
      headers: this.headers(options),
      client: this.client,
    });
  }

  /**
   * Get all Credential Issuer Profiles.
   * @param query - The query parameters.
   * @returns The Credential Issuer Profiles.
   */
  public async getCredentialIssuerProfiles(
    query: GetCredentialIssuerProfilesData["query"],
    options?: RequestOptions
  ) {
    return getCredentialIssuerProfiles({
      query,
      headers: this.headers(options),
      client: this.client,
    });
  }
}
