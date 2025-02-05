import { Identifier } from "@truststack/untp-types";
import { beforeEach, describe, expect, it } from "vitest";
import { CredentialIssuerBuilder } from "./credential-issuer";

describe("CredentialIssuerBuilder", () => {
  let builder: CredentialIssuerBuilder;

  beforeEach(() => {
    builder = new CredentialIssuerBuilder();
  });

  it("should initialize with default type", () => {
    expect(builder.get("type")).toEqual(["CredentialIssuer"]);
  });

  it("should set id when valid did:web format", () => {
    const id = "did:web:example.com";
    builder.id(id);
    expect(builder.get("id")).toBe(id);
  });

  it("should throw error when id is not in did:web format", () => {
    const invalidIds = [
      "example.com",
      "did:ion:example.com",
      "https://example.com",
      "did:web",
    ];

    invalidIds.forEach((invalidId) => {
      expect(() => builder.id(invalidId)).toThrow(
        "Credential issuer ID must be in did:web format (e.g., did:web:example.com)"
      );
    });
  });

  it("should set name", () => {
    const name = "Test Issuer";
    builder.name(name);
    expect(builder.get("name")).toBe(name);
  });

  it("should set otherIdentifier", () => {
    const identifiers: Identifier[] = [
      {
        id: "https://example.com/identifier/123",
        name: "Test Identifier",
        idScheme: {
          id: "https://example.com/scheme",
          name: "Test Scheme",
        },
      },
    ];
    builder.otherIdentifier(identifiers);
    expect(builder.get("otherIdentifier")).toEqual(identifiers);
  });

  it("should build a complete CredentialIssuer", () => {
    const credentialIssuer = builder
      .id("did:web:example.com")
      .name("Test Issuer")
      .otherIdentifier([
        {
          id: "https://example.com/identifier/123",
          name: "Test Identifier",
          idScheme: {
            id: "https://example.com/scheme",
            name: "Test Scheme",
          },
        },
      ])
      .build();

    expect(credentialIssuer).toEqual({
      type: ["CredentialIssuer"],
      id: "did:web:example.com",
      name: "Test Issuer",
      otherIdentifier: [
        {
          id: "https://example.com/identifier/123",
          name: "Test Identifier",
          idScheme: {
            id: "https://example.com/scheme",
            name: "Test Scheme",
          },
        },
      ],
    });
  });
});
