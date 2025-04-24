import {
  mintLinkAnchor,
  mintManyLinkAnchors,
  MintManyRequest,
  TrustStackClient,
} from "@truststack/core";

export class LinkAnchorClient extends TrustStackClient {
  /**
   * Mint a new link anchor
   * @returns The link anchor
   */
  public async mintLinkAnchor() {
    return mintLinkAnchor({
      headers: this.headers(),
      client: this.client,
    });
  }

  /**
   * Mint many link anchors
   * @param props - The mint many request
   * @returns The link anchors
   */
  public async mintManyLinkAnchors(props: MintManyRequest) {
    return mintManyLinkAnchors({
      body: props,
      headers: this.headers(),
      client: this.client,
    });
  }
}
