import {CredentialIssuer, DPP, Product} from "@truststack/untp-types";
import {Builder} from "./builder";

export class DPPBuilder extends Builder<DPP> {
  constructor(dpp?: DPP) {
    super(dpp);

    // Initialize with default type array
    this.set("type", ["DigitalProductPassport", "VerifiableCredential"]);

    // Initialize with default context array
    this.set("@context", [
      "https://www.w3.org/ns/credentials/v2",
      "https://test.uncefact.org/vocabulary/untp/dpp/0.5.0/",
    ]);
  }

  public id(value: string) {
    return this.set("id", value);
  }

  public product(value: Product) {
    return this.set("credentialSubject", value);
  }

  public issuer(value: CredentialIssuer) {
    return this.set("issuer", value);
  }

  public validFrom(value: string | Date) {
    const currentDate = new Date().toISOString().split("T")[0];
    if (
      currentDate !== undefined &&
      (typeof value === "string" ? new Date(value) : value) <
        new Date(currentDate)
    ) {
      throw new Error(
        "validFrom date cannot be earlier than the current date."
      );
    }
    const formattedValue =
      typeof value === "string" ? value : value.toISOString().split("T")[0];
    return this.set("validFrom", formattedValue);
  }

  public validUntil(value: string | Date) {
    const currentDate = new Date().toISOString().split("T")[0];
    if (
      currentDate !== undefined &&
      (typeof value === "string" ? new Date(value) : value) >
        new Date(currentDate)
    ) {
      throw new Error("validUntil date cannot be later than the current date.");
    }
    const formattedValue =
      typeof value === "string" ? value : value.toISOString().split("T")[0];
    return this.set("validUntil", formattedValue);
  }
}
