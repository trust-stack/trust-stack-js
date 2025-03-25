import {DCC} from "@truststack/untp-types";
import {Store} from "n3";
import {beforeEach, describe, it} from "vitest";
import {DeepPartial, NodeType} from "../types";
import {assertQuadDefine} from "../utils.test";
import {DigitalConformityCredentialMapper} from "./digital-conformity-credential";
import {ex, rdf} from "./utils";

describe("digital-conformity-credential", () => {
  let mapper: DigitalConformityCredentialMapper;

  // Boiler plate test, to be properly resolved.
  const payload: DeepPartial<DCC> = {
    id: "test-id",
    type: ["DigitalConformityCredential", "VerifiableCredential"],
  };

  beforeEach(() => {
    mapper = new DigitalConformityCredentialMapper();
  });

  it("should extract a DIGITAL_CONFORMITY_CREDENTIAL type", () => {
    const store = new Store();
    mapper.map(payload as DCC, store);

    // @ts-ignore
    const quads = store.getQuads(undefined, undefined, undefined, undefined);

    assertQuadDefine(quads, ex("test-id"), rdf("type"), ex(NodeType.DCC));
  });
});
