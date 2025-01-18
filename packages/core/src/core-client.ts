import {client} from "./client/sdk.gen";

export type TrustStackClientConfig = {
  baseUrl?: string;
  organizationId?: string;
  accessToken: string;
};

export type RequestOptions = {
  organizationId?: string;
  accessToken?: string;
  baseUrl?: string;
};

export class TrustStackClient {
  protected static accessToken: string;
  protected static baseUrl: string = "https://api.truststack.dev";
  protected static organizationId?: string;
  static client = client;

  static configure(config: TrustStackClientConfig) {
    this.accessToken = config.accessToken;
    this.baseUrl = this.getBaseUrl(config.baseUrl);
    this.organizationId = config.organizationId;

    client.setConfig({
      baseUrl: this.baseUrl,
    });

    client.interceptors.request.use((request) => {
      request.headers.set(
        "Authorization",
        `Bearer ${this.getAccessToken(config.accessToken)}`
      );
      return request;
    });
  }

  protected static headers(options?: RequestOptions) {
    return {
      "Content-Type": "application/json",
      Authorization: `Bearer ${this.getAccessToken(options?.accessToken)}`,
      "X-Organization-Id": this.getOrganizationId(options?.organizationId),
    };
  }

  private static getAccessToken(override?: string) {
    // Priority: override > static config > env var
    const token =
      override || this.accessToken || process.env.TRUSTSTACK_ACCESS_TOKEN;

    if (!token) {
      throw new Error("No access token provided");
    }
    return token;
  }

  private static getOrganizationId(override?: string) {
    return (
      override || this.organizationId || process.env.TRUSTSTACK_ORGANIZATION_ID
    );
  }

  private static getBaseUrl(override?: string) {
    return (
      override ||
      process.env.TRUSTSTACK_BASE_URL ||
      "https://api.truststack.dev"
    );
  }
}
