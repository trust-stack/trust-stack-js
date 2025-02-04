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
import {describe, expect, it} from "vitest";
import {ProductBuilder} from "./product";

describe("ProductBuilder", () => {
  it("should create an empty product with default type", () => {
    const product = ProductBuilder.create().build();
    expect(product.type).toEqual(["Product"]);
  });

  it("should build a product with all properties", () => {
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

    const product = ProductBuilder.create()
      .id("test-id")
      .name("Test Product")
      .registeredId("reg123")
      .idScheme(idScheme)
      .serialNumber("SN123")
      .batchNumber("BATCH123")
      .productImage(link)
      .description("Test Description")
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
      .traceabilityInformation(traceabilityPerformance)
      .build();

    expect(product).toEqual({
      type: ["Product"],
      id: "test-id",
      name: "Test Product",
      registeredId: "reg123",
      idScheme,
      serialNumber: "SN123",
      batchNumber: "BATCH123",
      productImage: link,
      description: "Test Description",
      productCategory: [classification],
      furtherInformation: [link],
      producedByParty: identifier,
      producedAtFacility: identifier,
      dimensions: dimension,
      productionDate: "2024-03-20",
      countryOfProduction: "US",
      granularityLevel: "item",
      materialsProvenance: [material],
      conformityClaim: [claim],
      circularityScorecard: circularityPerformance,
      emissionsScorecard: emissionsPerformance,
      traceabilityInformation: traceabilityPerformance,
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

  it("should allow chaining of methods", () => {
    const product = ProductBuilder.create()
      .id("test-id")
      .name("Test Product")
      .description("Test Description")
      .build();

    expect(product.id).toBe("test-id");
    expect(product.name).toBe("Test Product");
    expect(product.description).toBe("Test Description");
  });

  it("should handle optional properties", () => {
    const product = ProductBuilder.create()
      .id("test-id")
      .name("Test Product")
      .build();

    expect(product.description).toBeUndefined();
    expect(product.materialsProvenance).toBeUndefined();
    expect(product.circularityScorecard).toBeUndefined();
  });
});
