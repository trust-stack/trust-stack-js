import {IdentifierScheme} from "@truststack/untp-types";
import {beforeEach, describe, expect, it} from "vitest";
import {IdentifierBuilder} from "./identifier";

describe("IdentifierBuilder", () => {
  let builder: IdentifierBuilder;

  beforeEach(() => {
    builder = new IdentifierBuilder();
  });

  it("should initialize with default type", () => {
    expect(builder.get("type")).toEqual(["Identifier"]);
  });

  it("should set id", () => {
    const id = "did:web:facilities.example-company.com:123";
    builder.id(id);
    expect(builder.get("id")).toBe(id);
  });

  it("should set name", () => {
    const name = "Green Acres Battery Factory";
    builder.name(name);
    expect(builder.get("name")).toBe(name);
  });

  it("should set registeredId", () => {
    const registeredId = "FAC123456";
    builder.registeredId(registeredId);
    expect(builder.get("registeredId")).toBe(registeredId);
  });

  it("should set idScheme", () => {
    const scheme: IdentifierScheme = {
      type: ["IdentifierScheme"],
      id: "https://vocabulary.uncefact.org/identifierSchemes/facility",
      name: "Global Facility Registry",
    };
    builder.idScheme(scheme);
    expect(builder.get("idScheme")).toEqual(scheme);
  });

  it("should build a complete Identifier", () => {
    const identifier = builder
      .id("did:web:facilities.example-company.com:123")
      .name("Green Acres Battery Factory")
      .registeredId("FAC123456")
      .idScheme({
        type: ["IdentifierScheme"],
        id: "https://vocabulary.uncefact.org/identifierSchemes/facility",
        name: "Global Facility Registry",
      })
      .build();

    expect(identifier).toEqual({
      type: ["Identifier"],
      id: "did:web:facilities.example-company.com:123",
      name: "Green Acres Battery Factory",
      registeredId: "FAC123456",
      idScheme: {
        type: ["IdentifierScheme"],
        id: "https://vocabulary.uncefact.org/identifierSchemes/facility",
        name: "Global Facility Registry",
      },
    });
  });
});
