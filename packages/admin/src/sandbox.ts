import {clearSandbox, RequestOptions, TrustStackClient} from "@truststack/core";

export class SandboxClient extends TrustStackClient {
  public async clearSandbox(options?: RequestOptions) {
    return clearSandbox({
      headers: this.headers(options),
      client: this.client,
    });
  }
}
