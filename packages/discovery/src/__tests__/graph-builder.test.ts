import {DCC, DPP} from "@truststack/untp-types";
import {describe, it} from "vitest";
import {GraphBuilder, NodeData} from "../graph-builder";
import {LinkMap} from "../link-map";
import {CoreRegistry} from "../mapper";
import {ex, rdf} from "../mapper/utils";
import {DeepPartial, EdgeType, NodeType} from "../types";
import {assertQuadDefine} from "../utils.test";

describe("graph builder", () => {
  it("Product Passport referencing Conformity Credential.", () => {
    const linkMap = new LinkMap({
      "acme.com/deforestation-certificate.json": "conformity-id",
    });

    const passport: DeepPartial<DPP> = {
      id: "passport-id",
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

    const conformity: DeepPartial<DCC> = {
      id: "conformity-id",
      type: ["DigitalConformityCredential", "VerifiableCredential"],
    };

    const builder = new GraphBuilder({
      registry: new CoreRegistry(),
      linkMap,
    });

    builder.addNode(passport as NodeData);
    builder.addNode(conformity as NodeData);

    const store = builder.getGraph();

    //   @ts-ignore
    const quads = store.getQuads(undefined, undefined, undefined, undefined);

    //   Assert: Passport added to graph
    assertQuadDefine(quads, ex("passport-id"), rdf("type"), ex(NodeType.DPP));

    //   Assert: Conformity Credential added to graph
    assertQuadDefine(quads, ex("conformity-id"), rdf("type"), ex(NodeType.DCC));

    //   Assert: Passport references conformity credential
    assertQuadDefine(
      quads,
      ex("passport-id"),
      rdf(EdgeType.ConformityInformation),
      ex("conformity-id")
    );
  });
});
