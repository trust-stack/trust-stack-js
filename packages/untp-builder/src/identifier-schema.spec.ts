import {beforeEach, describe, expect, it} from "vitest";
import {IdentifierSchemeBuilder} from "./identifier-schema";

describe("IdentifierSchemeBuilder", () => {
  let builder: IdentifierSchemeBuilder;

  beforeEach(() => {
    builder = new IdentifierSchemeBuilder();
  });

  it("should initialize with default type", () => {
    expect(builder.get("type")).toEqual(["IdentifierScheme"]);
  });

  it("should set id", () => {
    const id = "https://vocabulary.uncefact.org/identifierSchemes/gs1";
    builder.id(id);
    expect(builder.get("id")).toBe(id);
  });

  it("should set name", () => {
    const name = "GS1 Company Prefix";
    builder.name(name);
    expect(builder.get("name")).toBe(name);
  });

  it("should build a complete IdentifierScheme", () => {
    const identifierScheme = builder
      .id("https://vocabulary.uncefact.org/identifierSchemes/gs1")
      .name("GS1 Company Prefix")
      .build();

    expect(identifierScheme).toEqual({
      type: ["IdentifierScheme"],
      id: "https://vocabulary.uncefact.org/identifierSchemes/gs1",
      name: "GS1 Company Prefix",
    });
  });
});
