import {
  createTradeItem,
  CreateTradeItem,
  getTradeItem,
  getTradeItemByIdentifier,
  getTradeItems,
  GetTradeItemsData,
  RequestOptions,
  TrustStackClient,
} from "@truststack/core";

export class TradeItemClient extends TrustStackClient {
  /**
   * Create a trade item
   * @param props - The properties of the trade item
   * @param options - The request options
   * @returns The created trade item
   */
  public async createTradeItem(
    props: CreateTradeItem,
    options?: RequestOptions
  ) {
    return createTradeItem({
      body: props,
      headers: this.headers(options),
      client: this.client,
    });
  }

  /**
   * Get a location
   * @param id - The ID of the trade item
   * @param options - The request options
   * @returns The trade item
   */
  public async getTradeItem(id: string, options?: RequestOptions) {
    return getTradeItem({
      path: {id},
      headers: this.headers(options),
      client: this.client,
    });
  }

  /**
   * Get trade items
   * @param query - The query parameters
   * @param options - The request options
   * @returns The trade items
   */
  public async getTradeItems(
    query: GetTradeItemsData["query"],
    options?: RequestOptions
  ) {
    return getTradeItems({
      query,
      headers: this.headers(options),
      client: this.client,
    });
  }

  /**
   * Get a trade item by identifier
   * @param identifier - The identifier of the trade item
   * @param options - The request options
   * @returns The trade item
   */
  public async getTradeItemByIdentifier(
    identifier: string,
    options?: RequestOptions
  ) {
    return getTradeItemByIdentifier({
      query: {identifier},
      headers: this.headers(options),
      client: this.client,
    });
  }
}
