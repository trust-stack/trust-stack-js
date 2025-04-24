import {
  createEvent,
  CreateEvent,
  deleteEvent,
  getEvent,
  getEvents,
  GetEventsData,
  RequestOptions,
  TrustStackClient,
} from "@truststack/core";

export class EventClient extends TrustStackClient {
  /**
   * Create an event
   * @param props - The properties of the event
   * @param options - The request options
   * @returns The created event
   */
  public async createEvent(props: CreateEvent, options?: RequestOptions) {
    return createEvent({
      body: props,
      headers: this.headers(options),
      client: this.client,
    });
  }

  /**
   * Get an event
   * @param id - The ID of the event
   * @param options - The request options
   * @returns The event
   */
  public async getEvent(id: string, options?: RequestOptions) {
    return getEvent({
      path: {id},
      headers: this.headers(options),
      client: this.client,
    });
  }

  /**
   * Get events
   * @param query - The query parameters
   * @param options - The request options
   * @returns The events
   */
  public async getEvents(
    query: GetEventsData["query"],
    options?: RequestOptions
  ) {
    return getEvents({
      query,
      headers: this.headers(options),
      client: this.client,
    });
  }

  /**
   * Delete an event
   * @param id - The ID of the event
   * @param options - The request options
   * @returns The deleted event
   */
  public async deleteEvent(id: string, options?: RequestOptions) {
    return deleteEvent({
      path: {id},
      headers: this.headers(options),
      client: this.client,
    });
  }
}
