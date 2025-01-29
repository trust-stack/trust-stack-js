import {client} from "@truststack/core";
import {afterEach, expect, vi} from "vitest";

export class TestUtils {
  // Mock all HTTP methods
  static getSpy = vi.spyOn(client, "get").mockResolvedValue({} as any);
  static postSpy = vi.spyOn(client, "post").mockResolvedValue({} as any);
  static putSpy = vi.spyOn(client, "put").mockResolvedValue({} as any);
  static deleteSpy = vi.spyOn(client, "delete").mockResolvedValue({} as any);
  static patchSpy = vi.spyOn(client, "patch").mockResolvedValue({} as any);

  static Init() {
    afterEach(() => {
      vi.resetAllMocks();
    });
  }

  static assertHeaders(headers: Record<string, string>) {
    // Check headers across all HTTP method calls
    const spies = [
      TestUtils.getSpy,
      TestUtils.postSpy,
      TestUtils.putSpy,
      TestUtils.deleteSpy,
      TestUtils.patchSpy,
    ];

    // Find the spy that was actually called
    const calledSpy = spies.find((spy) => spy.mock.calls.length > 0);

    expect(calledSpy).toBeDefined();
    expect(calledSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        headers: expect.objectContaining(headers),
      })
    );
  }
}
