import {Client} from "@hey-api/client-fetch";
import {client} from "./client/sdk.gen";

export type CoreClientConfig = {
  baseUrl: string;
  accessToken: string;
};

export class CoreClient {
  protected readonly client: Client;

  constructor(config: CoreClientConfig) {
    this.client = client;

    this.client.setConfig({
      baseUrl: config.baseUrl,
    });

    this.client.interceptors.request.use((request) => {
      request.headers.set("Authorization", `Bearer ${config.accessToken}`);
      request.headers.set("Content-Type", "application/json");
      return request;
    });
  }
}
