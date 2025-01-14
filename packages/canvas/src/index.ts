import {Core} from "@truststack-sdk/core";
import {
  CreateCanvasTemplate,
  createCanvasTemplate,
  findCanvasTemplate,
  renderCanvasTemplate,
} from "@truststack-sdk/core/client";

export class CanvasClient extends Core {
  /**
   * Create a Canvas Template.
   * @param data - The data to create the Canvas Template.
   * @returns The created Canvas Template.
   */
  public async createCanvasTemplate(data: CreateCanvasTemplate) {
    return createCanvasTemplate({
      body: data,
    });
  }

  /**
   * Get a Canvas Template by id.
   * @param id - The id of the Canvas Template.
   * @returns The Canvas Template.
   */
  public async getCanvasTemplate(id: string) {
    return findCanvasTemplate({
      path: {id},
    });
  }

  /**
   * Render a Canvas Template.
   * @param id - The id of the Canvas Template.
   * @returns The rendered Canvas Template.
   */
  public async renderCanvasTemplate(id: string, data: any) {
    return renderCanvasTemplate({
      path: {id},
      body: data,
    });
  }
}
