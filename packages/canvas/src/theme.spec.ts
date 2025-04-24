import {beforeEach, describe, expect, it, vi} from "vitest";
import {ThemeClient} from "./theme";

// Mock the core functions
vi.mock("@truststack/core", () => ({
  createTheme: vi.fn().mockResolvedValue({}),
  TrustStackClient: class {
    headers = vi.fn();
  },
}));

describe("ThemeClient", () => {
  let client: ThemeClient;

  beforeEach(() => {
    client = new ThemeClient();
    vi.clearAllMocks();
  });

  describe("createTheme", () => {
    describe("color validation", () => {
      it("should accept valid hex colors", async () => {
        const validHexColors = ["#123456", "#abc", "#ABC123", "#fff"];

        for (const color of validHexColors) {
          await expect(
            client.createTheme({name: "acme theme", color})
          ).resolves.not.toThrow();
        }
      });

      it("should accept valid RGB colors", async () => {
        const validRgbColors = [
          "rgb(0, 0, 0)",
          "rgb(255, 255, 255)",
          "rgb(123, 45, 67)",
        ];

        for (const color of validRgbColors) {
          await expect(
            client.createTheme({name: "acme theme", color})
          ).resolves.not.toThrow();
        }
      });

      it("should reject invalid hex colors", async () => {
        const invalidHexColors = ["#12345", "#gggggg", "123456", "#12345g"];

        for (const color of invalidHexColors) {
          await expect(
            client.createTheme({name: "acme theme", color})
          ).rejects.toThrow("Invalid color format");
        }
      });

      it("should allow theme creation without a color", async () => {
        await expect(
          client.createTheme({name: "acme theme", color: ""})
        ).resolves.not.toThrow();
      });
    });
  });
});
