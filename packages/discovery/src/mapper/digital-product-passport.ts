import { DigitalProductPassport } from "@trustprovenance/untp-types";
import { DataFactory, Store } from "n3";
import { LinkMap } from "src/link-map";
import { EdgeType, NodeType } from "src/types";
import { Mapper } from "../mapper-registry";
import { ex, rdf } from "./utils";

export class DigitalProductPassportMapper
  implements Mapper<DigitalProductPassport>
{
  map(data: DigitalProductPassport, store: Store, linkMap: LinkMap): void {
    // Add Hash ID
    store.addQuad(
      DataFactory.quad(
        DataFactory.namedNode(ex(data.id)),
        DataFactory.namedNode(rdf("type")),
        DataFactory.namedNode(ex(NodeType.DIGITAL_PRODUCT_PASSPORT)),
      ),
    );

    // Extract Conformity Links
    data.credentialSubject?.conformityInformation?.forEach(
      (conformityInformation) => {
        if (conformityInformation.conformityEvidence?.linkURL) {
          const linkId = linkMap.resolveLink(
            conformityInformation.conformityEvidence?.linkURL,
          );

          if (!linkId)
            throw Error(
              "Link not found in linkMap: " +
                conformityInformation.conformityEvidence?.linkURL,
            );

          store.addQuad(
            DataFactory.quad(
              DataFactory.namedNode(ex(data.id)),
              DataFactory.namedNode(rdf(EdgeType.ConformityInformation)),
              DataFactory.namedNode(ex(linkId)),
            ),
          );
        }
      },
    );
  }
}
