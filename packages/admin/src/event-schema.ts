import {
  RequestOptions,
  setEventSchema,
  SetEventSchema,
  TrustStackClient,
} from "@truststack/core";

export class EventSchemaClient extends TrustStackClient {
  /**
   * Set event schema
   * @param props - The event schema to set
   * @param options - The request options
   * @returns The event schema
   */
  public async setEventSchema(props: SetEventSchema, options?: RequestOptions) {
    return setEventSchema({
      body: props as any,
      headers: this.headers(options),
      client: this.client,
    });
  }

  /**
   * Set event schemas
   * @param data - The event schemas to set
   * @param options - The request options
   * @returns The event schemas
   */
  public async setEventSchemas(
    data: SetEventSchema[],
    options?: RequestOptions
  ) {
    const results = await Promise.all(
      data.map(async (item) => {
        return setEventSchema({
          body: item,
          headers: this.headers(options),
          client: this.client,
        });
      })
    );

    return results;
  }
}
