import {
  CreateEventTag,
  RequestOptions,
  setEventTags,
  TrustStackClient,
} from "@truststack/core";

export class EventTagClient extends TrustStackClient {
  public async setEventTags(props: CreateEventTag[], options?: RequestOptions) {
    return setEventTags({
      body: props,
      headers: this.headers(options),
      client: this.client,
    });
  }
}
