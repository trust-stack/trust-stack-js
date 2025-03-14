import {
  DigitalConformityCredential,
  DigitalProductPassport,
} from "@trustprovenance/untp-types";
import { GraphBuilder, NodeData } from "src/graph-builder";
import { LinkMap } from "src/link-map";
import { CoreRegistry } from "src/mapper";
import { ex, rdf } from "src/mapper/utils";
import { DeepPartial, EdgeType, NodeType } from "src/types";
import { assertQuadDefine } from "src/utils.test";
import { describe, it } from "vitest";

describe("graph builder", () => {
  it("Product Passport referencing Conformity Credential.", () => {
    const linkMap = new LinkMap({
      "acme.com/deforestation-certificate.json": "conformity-id",
    });

    const passport: DeepPartial<DigitalProductPassport> = {
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

    const conformity: DeepPartial<DigitalConformityCredential> = {
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
    assertQuadDefine(
      quads,
      ex("passport-id"),
      rdf("type"),
      ex(NodeType.DIGITAL_PRODUCT_PASSPORT),
    );

    //   Assert: Conformity Credential added to graph
    assertQuadDefine(
      quads,
      ex("conformity-id"),
      rdf("type"),
      ex(NodeType.DIGITAL_CONFORMITY_CREDENTIAL),
    );

    //   Assert: Passport references conformity credential
    assertQuadDefine(
      quads,
      ex("passport-id"),
      rdf(EdgeType.ConformityInformation),
      ex("conformity-id"),
    );
  });
});
