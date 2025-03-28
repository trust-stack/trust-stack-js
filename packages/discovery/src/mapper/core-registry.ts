import { MapperRegistry } from "../mapper-registry";
import { DigitalConformityCredentialMapper } from "./digital-conformity-credential";
import { DigitalProductPassportMapper } from "./digital-product-passport";

export class CoreRegistry extends MapperRegistry {
  constructor() {
    super();

    this.mappers.set(
      "DigitalProductPassport",
      new DigitalProductPassportMapper(),
    );

    this.mappers.set(
      "DigitalConformityCredential",
      new DigitalConformityCredentialMapper(),
    );
  }
}
