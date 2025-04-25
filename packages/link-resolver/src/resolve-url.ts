import {RequestOptions, resolveUrl, TrustStackClient} from "@truststack/core";

export class ResolveUrlClient extends TrustStackClient {
  /**
   * Resolve a URL and find link metadata associated with it
   * @param url - The URL to resolve
   * @param options - The request options
   * @returns The resolved URL
   */
  public async resolveUrl(url: string, options?: RequestOptions) {
    return resolveUrl({
      body: {url},
      headers: this.headers(options),
      client: this.client,
    });
  }
}
