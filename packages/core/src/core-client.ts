import {client} from "./client/sdk.gen";

export type TrustStackClientConfig = {
  baseUrl?: string;
  organizationId?: string;
  accessToken: string;
  tenantUserId?: string;
  sandbox?: boolean;
};

export type RequestOptions = {
  organizationId?: string;
  accessToken?: string;
  baseUrl?: string;
  tenantUserId?: string;
};

export class TrustStackClient {
  protected accessToken: string;
  protected baseUrl: string = "https://api.truststack.dev";
  protected sandboxBaseUrl: string = "https://sandbox.api.truststack.dev";
  protected organizationId?: string;
  protected tenantUserId?: string;
  protected sandbox: boolean = false;
  protected client = client;

  constructor(config?: TrustStackClientConfig) {
    this.accessToken = this.getAccessToken(config?.accessToken);
    this.sandbox = config?.sandbox || false;
    this.baseUrl = this.getBaseUrl(config?.baseUrl);

    if (config?.organizationId) {
      this.organizationId = config?.organizationId;
    }

    if (config?.tenantUserId) {
      this.tenantUserId = config?.tenantUserId;
    }
  }

  public configure(config: TrustStackClientConfig) {
    let accessToken = config.accessToken || process.env.TRUSTSTACK_ACCESS_TOKEN;
    if (!accessToken) {
      throw new Error("No access token provided");
    }

    let baseUrl =
      config.baseUrl ||
      process.env.TRUSTSTACK_BASE_URL ||
      "https://api.truststack.dev";

    this.accessToken = accessToken;
    this.baseUrl = baseUrl;
    this.sandbox = config.sandbox || false;
    this.organizationId = config.organizationId;
    this.tenantUserId = config.tenantUserId;
    this.client = client;
    this.client.setConfig({
      baseUrl: this.baseUrl,
    });

    this.client.interceptors.request.use((request) => {
      Object.entries(this.headers()).forEach(([key, value]) => {
        value && request.headers.append(key, value);
      });
      return request;
    });
  }

  protected headers(options?: RequestOptions) {
    return {
      "Content-Type": "application/json",
      Authorization: `Bearer ${this.getAccessToken(options?.accessToken)}`,
      "X-Organization-Id": this.getOrganizationId(options?.organizationId),
      "X-Tenant-User-Id": this.getTenantUserId(options?.tenantUserId),
    };
  }

  private getAccessToken(override?: string) {
    // Priority: override > static config > env var
    const token =
      override || this.accessToken || process.env.TRUSTSTACK_ACCESS_TOKEN;

    if (!token) {
      throw new Error("No access token provided");
    }
    return token;
  }

  private getOrganizationId(override?: string) {
    return (
      override || this.organizationId || process.env.TRUSTSTACK_ORGANIZATION_ID
    );
  }

  private getTenantUserId(override?: string) {
    return (
      override || this.tenantUserId || process.env.TRUSTSTACK_TENANT_USER_ID
    );
  }

  private getBaseUrl(override?: string) {
    if (override) {
      return override;
    }

    const envBaseUrl = process.env.TRUSTSTACK_BASE_URL;
    if (envBaseUrl) {
      return envBaseUrl;
    }

    return this.sandbox
      ? "https://sandbox.api.truststack.dev"
      : "https://api.truststack.dev";
  }
}
