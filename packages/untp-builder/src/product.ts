import {
  CircularityPerformance,
  Claim,
  Classification,
  Dimension,
  EmissionsPerformance,
  Identifier,
  IdentifierScheme,
  Link,
  Material,
  Product,
  TraceabilityPerformance,
} from "@truststack/untp-types";
import {Builder} from "./builder";

export class ProductBuilder extends Builder<Product> {
  constructor(product?: Product) {
    super(product);
    this.set("type", ["Product"]);
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

  public serialNumber(value: string) {
    return this.set("serialNumber", value);
  }

  public batchNumber(value: string) {
    return this.set("batchNumber", value);
  }

  public productImage(value: Link) {
    return this.set("productImage", value);
  }

  public description(value: string) {
    return this.set("description", value);
  }

  public productCategory(value: Classification[]) {
    return this.set("productCategory", value);
  }

  public furtherInformation(value: Link[]) {
    return this.set("furtherInformation", value);
  }

  public producedByParty(value: Identifier) {
    return this.set("producedByParty", value);
  }

  public producedAtFacility(value: Identifier) {
    return this.set("producedAtFacility", value);
  }

  public dimensions(value: Dimension) {
    return this.set("dimensions", value);
  }

  public productionDate(value: string) {
    return this.set("productionDate", value);
  }

  public countryOfProduction(value: string) {
    return this.set("countryOfProduction", value);
  }

  public granularityLevel(value: "item" | "batch" | "model") {
    return this.set("granularityLevel", value);
  }

  public materialsProvenance(value: Material[]) {
    return this.set("materialsProvenance", value);
  }

  public conformityClaim(value: Claim[]) {
    return this.set("conformityClaim", value);
  }

  public circularityScorecard(value: CircularityPerformance) {
    return this.set("circularityScorecard", value);
  }

  public emissionsScorecard(value: EmissionsPerformance) {
    return this.set("emissionsScorecard", value);
  }

  public traceabilityInformation(value: TraceabilityPerformance) {
    return this.set("traceabilityInformation", value);
  }
}
