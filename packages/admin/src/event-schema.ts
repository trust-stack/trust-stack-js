import {
  CreateEventSchema,
  RequestOptions,
  setEventSchemas,
  TrustStackClient,
} from "@truststack/core";

export class EventSchemaClient extends TrustStackClient {
  /**
   * Set event schemas
   * @param props - The event schemas to set
   * @param options - The request options
   * @returns The event schemas
   */
  public async setEventSchemas(
    props: CreateEventSchema[],
    options?: RequestOptions
  ) {
    return setEventSchemas({
      body: props,
      headers: this.headers(options),
      client: this.client,
    });
  }
}
