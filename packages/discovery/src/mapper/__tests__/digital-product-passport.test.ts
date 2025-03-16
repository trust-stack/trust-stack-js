import {DPP} from "@truststack/untp-types";
import {Store} from "n3";
import {beforeEach, describe, it} from "vitest";
import {LinkMap} from "../../link-map";
import {DeepPartial, EdgeType, NodeType} from "../../types";
import {assertQuadDefine} from "../../utils.test";
import {DigitalProductPassportMapper} from "../digital-product-passport";
import {ex, rdf} from "../utils";

describe("digital-product-passport", () => {
  let mapper: DigitalProductPassportMapper;

  // Boiler plate test, to be properly resolved.
  const payload: DeepPartial<DPP> = {
    id: "test-id",
    type: ["DigitalProductPassport", "VerifiableCredential"],
    credentialSubject: {
      conformityInformation: [
        {
          conformityEvidence: {
            type: "Link",
            linkURL: "acme.com/deforestation-certificate.json",
            linkName: "Deforestation Certificate",
            linkType: "untp.dcc",
            targetType: "string",
          },
        },
      ],
    },
  };

  beforeEach(() => {
    mapper = new DigitalProductPassportMapper();
  });

  it("should extract a DIGITAL_PRODUCT_PASSPORT type", () => {
    const linkMap = new LinkMap();
    linkMap.addLink("acme.com/deforestation-certificate.json", "test-link-id");

    const store = new Store();
    mapper.map(payload as DPP, store, linkMap);

    // @ts-ignore
    const quads = store.getQuads(undefined, undefined, undefined, undefined);

    assertQuadDefine(quads, ex("test-id"), rdf("type"), ex(NodeType.DPP));

    // Assert: Conformity Credential Link
    assertQuadDefine(
      quads,
      ex("test-id"),
      rdf(EdgeType.ConformityInformation),
      ex("test-link-id")
    );
  });
});
