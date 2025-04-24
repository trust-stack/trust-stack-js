import {
  createOrganization,
  CreateOrganization,
  deleteOrganization,
  getOrganization,
  RequestOptions,
  TrustStackClient,
  updateOrganization,
  UpdateOrganization,
} from "@truststack/core";

export class OrganizationClient extends TrustStackClient {
  /**
   * Create an organization
   * @param props - The properties of the organization
   * @param options - The request options
   * @returns The created organization
   */
  async createOrganization(
    props: CreateOrganization,
    options?: RequestOptions
  ) {
    return createOrganization({
      body: props,
      headers: this.headers(options),
    });
  }

  /**
   * Update an organization
   * @param props - The properties of the organization
   * @param options - The request options
   * @returns The updated organization
   */
  async updateOrganization(
    props: UpdateOrganization & {id: string},
    options?: RequestOptions
  ) {
    return updateOrganization({
      path: {
        id: props.id,
      },
      body: {
        name: props.name,
      },
      headers: this.headers(options),
    });
  }

  /**
   * Get an organization
   * @param id - The ID of the organization
   * @param options - The request options
   * @returns The organization
   */
  async getOrganization(id: string, options?: RequestOptions) {
    return getOrganization({
      path: {
        id,
      },
      headers: this.headers(options),
    });
  }

  /**
   * Delete an organization
   * @param id - The ID of the organization
   * @param options - The request options
   * @returns The deleted organization
   */
  async deleteOrganization(id: string, options?: RequestOptions) {
    return deleteOrganization({
      path: {
        id: id,
      },
      headers: this.headers(options),
    });
  }
}
