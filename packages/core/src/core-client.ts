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
  protected accessToken?: string;
  protected baseUrl: string;
  protected organizationId?: string;
  protected tenantUserId?: string;
  protected sandbox: boolean = false;
  protected client = client;

  constructor(config?: TrustStackClientConfig) {
    this.accessToken = config?.accessToken;
    this.sandbox = config?.sandbox || false;
    this.baseUrl = config?.baseUrl || "https://api.truststack.dev";

    if (config?.organizationId) {
      this.organizationId = config?.organizationId;
    }

    if (config?.tenantUserId) {
      this.tenantUserId = config?.tenantUserId;
    }

    this.client = client;
    this.client.setConfig({
      baseUrl: this.baseUrl,
      headers: this.headers(),
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
    return override || this.accessToken || process.env.TRUSTSTACK_ACCESS_TOKEN;
  }

  private getOrganizationId(override?: string) {
    // Priority: override > static config > env var
    return (
      override || this.organizationId || process.env.TRUSTSTACK_ORGANIZATION_ID
    );
  }

  private getTenantUserId(override?: string) {
    // Priority: override > static config > env var
    return (
      override || this.tenantUserId || process.env.TRUSTSTACK_TENANT_USER_ID
    );
  }

  private getBaseUrl(override?: string) {
    // Priority: sandbox >override > static config > env var
    if (this.sandbox) {
      return "https://sandbox.api.truststack.dev";
    }

    return (
      override ||
      process.env.TRUSTSTACK_BASE_URL ||
      "https://api.truststack.dev"
    );
  }
}
