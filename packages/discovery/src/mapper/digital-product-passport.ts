import {DPP} from "@truststack/untp-types";
import {DataFactory, Store} from "n3";
import {LinkMap} from "../link-map";
import {Mapper} from "../mapper-registry";
import {EdgeType, NodeType} from "../types";
import {ex, rdf} from "./utils";

export class DigitalProductPassportMapper implements Mapper<DPP> {
  map(data: DPP, store: Store, linkMap: LinkMap): void {
    // Add Hash ID
    store.addQuad(
      DataFactory.quad(
        DataFactory.namedNode(ex(data.id)),
        DataFactory.namedNode(rdf("type")),
        DataFactory.namedNode(ex(NodeType.DPP))
      )
    );

    // Extract Conformity Links
    data.credentialSubject?.conformityClaim?.forEach(
      (conformityInformation) => {
        if (conformityInformation.conformityEvidence?.linkURL) {
          const linkId = linkMap.resolveLink(
            conformityInformation.conformityEvidence?.linkURL
          );

          if (!linkId)
            throw Error(
              "Link not found in linkMap: " +
                conformityInformation.conformityEvidence?.linkURL
            );

          store.addQuad(
            DataFactory.quad(
              DataFactory.namedNode(ex(data.id)),
              DataFactory.namedNode(rdf(EdgeType.ConformityInformation)),
              DataFactory.namedNode(ex(linkId))
            )
          );
        }
      }
    );
  }
}
