import {client} from "./client/sdk.gen";

export type TrustStackClientConfig = {
  baseUrl?: string;
  organizationId?: string;
  accessToken: string;
  tenantUserId?: string;
};

export type RequestOptions = {
  organizationId?: string;
  accessToken?: string;
  baseUrl?: string;
  tenantUserId?: string;
};

export class TrustStackClient {
  protected static accessToken: string;
  protected static baseUrl: string = "https://api.truststack.dev";
  protected static organizationId?: string;
  protected static tenantUserId?: string;
  static client = client;

  static configure(config: TrustStackClientConfig) {
    this.accessToken = config.accessToken;
    this.baseUrl = this.getBaseUrl(config.baseUrl);
    this.organizationId = config.organizationId;
    this.tenantUserId = config.tenantUserId;
    client.setConfig({
      baseUrl: this.baseUrl,
    });
  }

  protected static headers(options?: RequestOptions) {
    return {
      "Content-Type": "application/json",
      Authorization: `Bearer ${this.getAccessToken(options?.accessToken)}`,
      "X-Organization-Id": this.getOrganizationId(options?.organizationId),
      "X-Tenant-User-Id": this.getTenantUserId(options?.tenantUserId),
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

  private static getTenantUserId(override?: string) {
    return (
      override || this.tenantUserId || process.env.TRUSTSTACK_TENANT_USER_ID
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
