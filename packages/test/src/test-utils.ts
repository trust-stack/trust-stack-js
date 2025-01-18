import {client} from "@truststack/core";

export class TestUtils {
  static getSpy = jest.spyOn(client, "get").mockResolvedValue({} as any);

  static Init() {
    afterEach(() => {
      jest.resetAllMocks();
    });
  }

  static assertHeaders(headers: Record<string, string>) {
    expect(TestUtils.getSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        headers: expect.objectContaining(headers),
      })
    );
  }
}
