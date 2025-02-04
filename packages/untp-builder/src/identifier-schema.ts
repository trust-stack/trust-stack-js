import {IdentifierScheme} from "@truststack/untp-types";
import {Builder} from "./builder";

export class IdentifierSchemeBuilder extends Builder<IdentifierScheme> {
  constructor(identifierScheme?: IdentifierScheme) {
    super(identifierScheme);
    this.set("type", ["IdentifierScheme"]);
  }

  public id(value: string) {
    return this.set("id", value);
  }

  public name(value: string) {
    return this.set("name", value);
  }
}
