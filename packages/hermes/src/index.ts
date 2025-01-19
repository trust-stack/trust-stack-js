import {
  createExternalResolver,
  CreateExternalResolverDto,
  createLinkSet,
  CreateLinkSetDto,
  deleteExternalResolver,
  getExternalResolver,
  GetExternalResolverData,
  getLinkSet,
  getLinkSets,
  GetLinkSetsData,
  getManyExternalResolvers,
  RequestOptions,
  TrustStackClient,
  updateExternalResolver,
  UpdateExternalResolverDto,
  updateLinkSet,
  UpdateLinkSetDto,
} from "@truststack/core";

export class HermesClient extends TrustStackClient {
  /**
   * Get a Link Set
   * @param id - The ID of the Link Set
   * @param options - The request options
   * @returns The Link Set
   */
  public async getLinkSet(id: string, options?: RequestOptions) {
    return getLinkSet({
      path: {
        id,
      },
      headers: TrustStackClient.headers(options),
    });
  }

  /**
   * Get all Link Sets for the requested organization.
   * @param query - The query parameters
   * @param options - The request options
   * @returns The Link Sets
   */
  public async getLinkSets(
    query: GetLinkSetsData["query"],
    options?: RequestOptions
  ) {
    return getLinkSets({
      query,
      headers: TrustStackClient.headers(options),
    });
  }

  /**
   * Create a Link Set
   * @param props - The properties of the Link Set
   * @param options - The request options
   * @returns The created Link Set
   */
  public async createLinkSet(
    props: CreateLinkSetDto,
    options?: RequestOptions
  ) {
    return createLinkSet({
      body: props,
      headers: TrustStackClient.headers(options),
    });
  }

  /**
   * Update a Link Set
   * @param props - The properties of the Link Set
   * @param options - The request options
   * @returns The updated Link Set
   */
  public async updateLinkSet(
    props: UpdateLinkSetDto & {id: string},
    options?: RequestOptions
  ) {
    return updateLinkSet({
      path: {
        id: props.id,
      },
      body: props,
      headers: TrustStackClient.headers(options),
    });
  }

  /**
   * Get an External Resolver
   * @param id - The ID of the External Resolver
   * @param options - The request options
   * @returns The External Resolver
   */
  public async getExternalResolver(id: string, options?: RequestOptions) {
    return getExternalResolver({
      path: {
        id,
      },
      headers: TrustStackClient.headers(options),
    });
  }

  /**
   * Get all External Resolvers for the requested organization.
   * @param query - The query parameters
   * @param options - The request options
   * @returns The External Resolvers
   */
  public async getExternalResolvers(
    query: GetExternalResolverData["query"],
    options?: RequestOptions
  ) {
    return getManyExternalResolvers({
      query,
      headers: TrustStackClient.headers(options),
    });
  }

  /**
   * Create an External Resolver
   * @param props - The properties of the External Resolver
   * @param options - The request options
   * @returns The created External Resolver
   */
  public async createExternalResolver(
    props: CreateExternalResolverDto,
    options?: RequestOptions
  ) {
    return createExternalResolver({
      body: props,
      headers: TrustStackClient.headers(options),
    });
  }

  /**
   * Update an External Resolver
   * @param props - The properties of the External Resolver
   * @param options - The request options
   * @returns The updated External Resolver
   */
  public async updateExternalResolver(
    props: UpdateExternalResolverDto & {id: string},
    options?: RequestOptions
  ) {
    return updateExternalResolver({
      path: {
        id: props.id,
      },
      body: props,
      headers: TrustStackClient.headers(options),
    });
  }

  /**
   * Delete an External Resolver
   * @param id - The ID of the External Resolver
   * @param options - The request options
   * @returns The deleted External Resolver
   */
  public async deleteExternalResolver(id: string, options?: RequestOptions) {
    return deleteExternalResolver({
      path: {
        id,
      },
      headers: TrustStackClient.headers(options),
    });
  }
}
