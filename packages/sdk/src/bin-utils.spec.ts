import "reflect-metadata";

import {describe, expect, it, vi} from "vitest";
import {applyConfig} from "./bin-utils";

const mocks = vi.hoisted(() => ({
  setEventTagsSpy: vi.fn(),
}));

vi.mock("@truststack/admin", () => {
  return {
    AdminClient: vi.fn().mockImplementation(() => {
      return {
        setEventTags: mocks.setEventTagsSpy,
      };
    }),
  };
});

describe("bin-utils", () => {
  describe("applyConfig", () => {
    it("should not call setEventTags if eventTags is not provided", async () => {
      const config = {
        eventTags: undefined,
      };

      await applyConfig(config, "sandbox");

      // Assert: The setEventTags method should not have been called
      expect(mocks.setEventTagsSpy).toHaveBeenCalledTimes(1);

      // Assert: The setEventTags method should have been called with an empty array
      expect(mocks.setEventTagsSpy).toHaveBeenCalledWith([]);
    });

    it("should fall back to the name for the description if no description is provided", async () => {
      const config = {
        eventTags: [
          {
            name: "test-tag",
            code: "TEST-TAG",
          },
        ],
      };

      await applyConfig(config, "sandbox");

      // Assert: The setEventTags method should have been called with the correct parameters
      expect(mocks.setEventTagsSpy).toHaveBeenCalledWith([
        {
          code: "TEST-TAG",
          description: "test-tag",
          name: "test-tag",
        },
      ]);
    });
  });
});
