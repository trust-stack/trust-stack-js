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
} from "@truststack/untp-types/0.5.0/DPP";
import {Builder, IBuilder} from "builder-pattern";

export class ProductBuilder {
  private builder: IBuilder<Product>;

  constructor(product?: Product) {
    this.builder = Builder<Product>(product);

    // Initialize with default type array
    this.builder.type(["Product"]);
  }

  // Generic method to handle builder calls
  protected set<K extends keyof Product>(key: K, value: Product[K]): this {
    (this.builder as any)[key](value);
    return this;
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

  public build(): Product {
    return this.builder.build();
  }

  // Static factory methods
  public static fromJSON(json: Product): Product {
    return new ProductBuilder(json).build();
  }

  public static create(): ProductBuilder {
    return new ProductBuilder();
  }
}
