import {DCC} from "@truststack/untp-types";
import {DataFactory, Store} from "n3";
import {Mapper} from "../mapper-registry";
import {NodeType} from "../types";
import {ex, rdf} from "./utils";

export class DigitalConformityCredentialMapper implements Mapper<DCC> {
  map(data: DCC, store: Store): void {
    // Add Hash ID
    store.addQuad(
      DataFactory.quad(
        DataFactory.namedNode(ex(data.id)),
        DataFactory.namedNode(rdf("type")),
        DataFactory.namedNode(ex(NodeType.DCC))
      )
    );
  }
}
