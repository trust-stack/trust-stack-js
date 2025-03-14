import { DigitalConformityCredential } from "@trustprovenance/untp-types";
import { DataFactory, Store } from "n3";
import { Mapper } from "src/mapper-registry";
import { NodeType } from "src/types";
import { ex, rdf } from "./utils";

export class DigitalConformityCredentialMapper
  implements Mapper<DigitalConformityCredential>
{
  map(data: DigitalConformityCredential, store: Store): void {
    // Add Hash ID
    store.addQuad(
      DataFactory.quad(
        DataFactory.namedNode(ex(data.id)),
        DataFactory.namedNode(rdf("type")),
        DataFactory.namedNode(ex(NodeType.DIGITAL_CONFORMITY_CREDENTIAL)),
      ),
    );
  }
}
