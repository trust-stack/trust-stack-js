import {
  createTheme,
  CreateTheme,
  deleteTheme,
  getTheme,
  RequestOptions,
  TrustStackClient,
  updateTheme,
  UpdateTheme,
} from "@truststack/core";

export class ThemeClient extends TrustStackClient {
  /**
   * Create a Theme.
   * @param data - The data to create the Theme.
   * @returns The created Theme.
   */
  public async createTheme(data: CreateTheme, options?: RequestOptions) {
    // Check proper hex or rgb value provided
    if (data.color) {
      const hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
      const rgbRegex =
        /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/;

      if (!hexRegex.test(data.color) && !rgbRegex.test(data.color)) {
        throw new Error(
          "Invalid color format. Must be a hex code (e.g., #FF0000) or RGB value (e.g., rgb(255, 0, 0))"
        );
      }

      // For RGB format, validate number ranges
      if (rgbRegex.test(data.color)) {
        const [_, r, g, b] = data.color.match(rgbRegex) || [];
        if (
          [r, g, b].some(
            (val) =>
              parseInt(val ? val : "") < 0 || parseInt(val ? val : "") > 255
          )
        ) {
          throw new Error("RGB values must be between 0 and 255");
        }
      }
    }

    return createTheme({
      body: data,
      headers: this.headers(options),
    });
  }

  /**
   * Get a Theme by id.
   * @param id - The id of the Theme.
   * @returns The Theme.
   */
  public async getTheme(id: string, options?: RequestOptions) {
    return getTheme({
      headers: this.headers(options),
      path: {id},
    });
  }

  /**
   * Update a Theme.
   * @param id - The id of the Theme.
   * @param data - The data to update the Theme.
   * @returns The updated Theme.
   */
  public async updateTheme(
    id: string,
    data: UpdateTheme,
    options?: RequestOptions
  ) {
    return updateTheme({
      headers: this.headers(options),
      path: {id},
      body: data,
    });
  }

  /**
   * Delete a Theme.
   * @param id - The id of the Theme.
   * @returns The deleted Theme.
   */
  public async deleteTheme(id: string, options?: RequestOptions) {
    return deleteTheme({
      headers: this.headers(options),
      path: {id},
    });
  }
}
