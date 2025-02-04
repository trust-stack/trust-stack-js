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
import {beforeEach, describe, expect, it} from "vitest";
import {ProductBuilder} from "./product";

describe("ProductBuilder", () => {
  let builder: ProductBuilder;

  beforeEach(() => {
    builder = new ProductBuilder();
  });

  it("should initialize with default type", () => {
    expect(builder.get("type")).toEqual(["Product"]);
  });

  it("should set basic properties", () => {
    builder.id("test-id").name("Test Product").description("Test Description");

    expect(builder.get("id")).toBe("test-id");
    expect(builder.get("name")).toBe("Test Product");
    expect(builder.get("description")).toBe("Test Description");
  });

  it("should set optional properties", () => {
    const link: Link = {};
    const idScheme: IdentifierScheme = {
      type: ["IdentifierScheme"],
      id: "party123",
      name: "Test Category",
    };
    const classification: Classification = {
      id: "123",
      code: "123",
      name: "Test Category",
    };
    const identifier: Identifier = {
      id: "party123",
      name: "Test Category",
      idScheme,
    };
    const dimension: Dimension = {
      length: {value: 10, unit: "cm"},
      width: {value: 20, unit: "cm"},
      height: {value: 30, unit: "cm"},
    };
    const material: Material = {name: "Steel", percentage: 100};
    const claim: Claim = {
      id: "123",
      conformityTopic: "circularity.design",
      title: "Test Claim",
      conformance: true,
    };
    const circularityPerformance: CircularityPerformance = {score: 80};
    const emissionsPerformance: EmissionsPerformance = {
      carbonFootprint: 90,
      declaredUnit: "kgCO2e",
      primarySourcedRatio: 100,
      operationalScope: "CradleToGate",
    };
    const traceabilityPerformance: TraceabilityPerformance = {score: 95};

    builder
      .registeredId("reg123")
      .idScheme(idScheme)
      .serialNumber("SN123")
      .batchNumber("BATCH123")
      .productImage(link)
      .productCategory([classification])
      .furtherInformation([link])
      .producedByParty(identifier)
      .producedAtFacility(identifier)
      .dimensions(dimension)
      .productionDate("2024-03-20")
      .countryOfProduction("US")
      .granularityLevel("item")
      .materialsProvenance([material])
      .conformityClaim([claim])
      .circularityScorecard(circularityPerformance)
      .emissionsScorecard(emissionsPerformance)
      .traceabilityInformation(traceabilityPerformance);

    expect(builder.get("registeredId")).toBe("reg123");
    expect(builder.get("idScheme")).toEqual(idScheme);
    expect(builder.get("serialNumber")).toBe("SN123");
    expect(builder.get("batchNumber")).toBe("BATCH123");
    expect(builder.get("productImage")).toEqual(link);
    expect(builder.get("productCategory")).toEqual([classification]);
    expect(builder.get("furtherInformation")).toEqual([link]);
    expect(builder.get("producedByParty")).toEqual(identifier);
    expect(builder.get("producedAtFacility")).toEqual(identifier);
    expect(builder.get("dimensions")).toEqual(dimension);
    expect(builder.get("productionDate")).toBe("2024-03-20");
    expect(builder.get("countryOfProduction")).toBe("US");
    expect(builder.get("granularityLevel")).toBe("item");
    expect(builder.get("materialsProvenance")).toEqual([material]);
    expect(builder.get("conformityClaim")).toEqual([claim]);
    expect(builder.get("circularityScorecard")).toEqual(circularityPerformance);
    expect(builder.get("emissionsScorecard")).toEqual(emissionsPerformance);
    expect(builder.get("traceabilityInformation")).toEqual(
      traceabilityPerformance
    );
  });

  it("should build a complete product", () => {
    const product = builder
      .id("test-id")
      .name("Test Product")
      .description("Test Description")
      .build();

    expect(product).toEqual({
      type: ["Product"],
      id: "test-id",
      name: "Test Product",
      description: "Test Description",
    });
  });

  it("should create a product from JSON", () => {
    const initialProduct: Product = {
      type: ["Product"],
      id: "test-id",
      name: "Test Product",
    };

    const product = ProductBuilder.fromJSON(initialProduct);
    expect(product).toEqual(initialProduct);
  });
});
