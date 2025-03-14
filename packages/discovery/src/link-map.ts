/**
 * Maintains a map of URL to ID resolutions.
 */
export class LinkMap {
  private linkMap: Map<string, string> = new Map();

  constructor(defaultMap?: { [key: string]: string }) {
    this.linkMap = new Map();
    if (defaultMap) {
      Object.keys(defaultMap).forEach((key) => {
        this.linkMap.set(key, defaultMap[key]);
      });
    }
  }

  public getMap(): Map<string, string> {
    return this.linkMap;
  }

  /**
   *
   * @param url URL present in Transparency Graph that was resolved
   * @param document The document that was resolved via the `url`
   */
  public addLink(url: string, id: string) {
    this.linkMap.set(url, id);
  }

  /**
   *
   * @param url URL to resolve
   * @returns The id of the document that is resolved
   */
  public resolveLink(url: string) {
    return this.linkMap.get(url);
  }
}
