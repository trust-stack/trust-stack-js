import {
  CreateCanvasTemplate,
  createCanvasTemplate,
  getCanvasTemplate,
  renderCanvasTemplate,
  RequestOptions,
  TrustStackClient,
} from "@truststack/core";

export class CanvasTemplateClient extends TrustStackClient {
  /**
   * Create a Canvas Template.
   * @param data - The data to create the Canvas Template.
   * @returns The created Canvas Template.
   */
  public async createCanvasTemplate(
    data: CreateCanvasTemplate,
    options?: RequestOptions
  ) {
    return createCanvasTemplate({
      body: data,
      headers: this.headers(options),
      client: this.client,
    });
  }

  /**
   * Get a Canvas Template by id.
   * @param id - The id of the Canvas Template.
   * @returns The Canvas Template.
   */
  public async getCanvasTemplate(id: string, options?: RequestOptions) {
    return getCanvasTemplate({
      path: {id},
      headers: this.headers(options),
      client: this.client,
    });
  }

  /**
   * Render a Canvas Template.
   * @param id - The id of the Canvas Template.
   * @returns The rendered Canvas Template.
   */
  public async renderCanvasTemplate(
    id: string,
    data: any,
    options?: RequestOptions
  ) {
    return renderCanvasTemplate({
      path: {id},
      body: data,
      headers: this.headers(options),
      client: this.client,
    });
  }
}
