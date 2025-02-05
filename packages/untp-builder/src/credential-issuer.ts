import {CredentialIssuer, Identifier} from "@truststack/untp-types";
import {Builder} from "./builder";

export class CredentialIssuerBuilder extends Builder<CredentialIssuer> {
  constructor(credentialIssuer?: CredentialIssuer) {
    super(credentialIssuer);
    this.set("type", ["CredentialIssuer"]);
  }

  public id(value: string) {
    if (!value.startsWith("did:web:")) {
      throw new Error(
        "Credential issuer ID must be in did:web format (e.g., did:web:example.com)"
      );
    }
    return this.set("id", value);
  }

  public name(value: string) {
    return this.set("name", value);
  }

  public otherIdentifier(value: Identifier[]) {
    return this.set("otherIdentifier", value);
  }
}
