import {
  createUploadUrl,
  getObject,
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

  /**
   * Get an object by its ID
   * @param id - The ID of the object
   * @param options - The request options
   * @returns The object
   */
  public async getObject(id: string, options?: RequestOptions) {
    return getObject({
      path: {id},
      headers: this.headers(options),
      client: this.client,
    });
  }
}
