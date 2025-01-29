import {
  CanvasTemplateInstanceLink,
  linkCanvasTemplateInstance,
  RequestOptions,
  TrustStackClient,
} from "@truststack/core";

export class CanvasTemplateInstanceClient extends TrustStackClient {
  /**
   * Link a Canvas Template Instance to a Canvas Template.
   * @param id - The id of the Canvas Template Instance.
   * @param data - The data to link the Canvas Template Instance to the Canvas Template.
   * @returns The linked Canvas Template Instance.
   */
  public async linkCanvasTemplateInstance(
    id: string,
    data: CanvasTemplateInstanceLink,
    options?: RequestOptions
  ) {
    return linkCanvasTemplateInstance({
      body: data,
      headers: TrustStackClient.headers(options),
      path: {id},
    });
  }
}
