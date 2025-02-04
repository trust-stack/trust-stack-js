import {Identifier, IdentifierScheme} from "@truststack/untp-types";
import {Builder} from "./builder";

export class IdentifierBuilder extends Builder<Identifier> {
  constructor(identifier?: Identifier) {
    super(identifier);
    this.set("type", ["Identifier"]);
  }

  public id(value: string) {
    return this.set("id", value);
  }

  public name(value: string) {
    return this.set("name", value);
  }

  public registeredId(value: string) {
    return this.set("registeredId", value);
  }

  public idScheme(value: IdentifierScheme) {
    return this.set("idScheme", value);
  }
}
