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
      headers: TrustStackClient.headers(options),
    });
  }
}
