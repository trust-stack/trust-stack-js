import {Client} from "@hey-api/client-fetch";
import {client} from "./client/sdk.gen";

export type CoreConfig = {
  baseUrl: string;
  accessToken: string;
};

export class Core {
  protected readonly client: Client;

  constructor(config: CoreConfig) {
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
