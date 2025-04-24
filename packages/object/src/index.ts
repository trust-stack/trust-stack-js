import {
  createUploadUrl,
  RequestOptions,
  S3UploadObject,
  TrustStackClient,
} from "@truststack/core";

export class ObjectClient extends TrustStackClient {
  /**
   * Create a presigned url for an object upload. This will also create a new object record.
   * @param props - The properties of the object to upload
   * @param options - The request options
   * @returns The presigned url
   */
  public async createUploadUrl(
    props: S3UploadObject,
    options?: RequestOptions
  ) {
    return createUploadUrl({
      body: props,
      headers: this.headers(options),
      client: this.client,
    });
  }
}
