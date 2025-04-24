import {client} from "./client/sdk.gen";

export type TrustStackClientConfig = {
  baseUrl?: string;
  organizationId?: string;
  accessToken?: string;
  tenantUserId?: string;
  sandbox?: boolean;
  userId?: string;
};

export type RequestOptions = {
  organizationId?: string;
  accessToken?: string;
  baseUrl?: string;
  tenantUserId?: string;
  userId?: string;
};

export class TrustStackClient {
  protected accessToken?: string;
  protected baseUrl: string;
  protected organizationId?: string;
  protected tenantUserId?: string;
  protected userId?: string;
  protected sandbox: boolean = false;
  protected client = client;

  constructor(config?: TrustStackClientConfig) {
    this.accessToken = config?.accessToken;
    this.sandbox = config?.sandbox || false;
    this.baseUrl = config?.baseUrl || "https://api.truststack.dev";
    this.userId = config?.userId;
    this.organizationId = config?.organizationId;
    this.tenantUserId = config?.tenantUserId;

    this.client = client;
    this.client.setConfig({
      baseUrl: this.baseUrl,
      headers: this.headers(),
    });
  }

  protected getProps(): TrustStackClientConfig {
    return {
      baseUrl: this.baseUrl,
      sandbox: this.sandbox,
      organizationId: this.organizationId,
      tenantUserId: this.tenantUserId,
      userId: this.userId,
      accessToken: this.accessToken,
    };
  }

  protected headers(options?: RequestOptions) {
    return {
      "Content-Type": "application/json",
      Authorization: `Bearer ${this.getAccessToken(options?.accessToken)}`,
      "X-Organization-Id": this.getOrganizationId(options?.organizationId),
      "X-Tenant-User-Id": this.getTenantUserId(options?.tenantUserId),
      "X-User-Id": this.getUserId(options?.userId),
    };
  }

  private getUserId(override?: string) {
    // Priority: override > static config > env var
    return override || this.userId || process.env.TRUSTSTACK_USER_ID;
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
