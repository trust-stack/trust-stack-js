import {CredentialIssuer, Product} from "@truststack/untp-types";
import {afterEach, beforeEach, describe, expect, it, vi} from "vitest";
import {DPPBuilder} from "./dpp";

describe("DPPBuilder", () => {
  let builder: DPPBuilder;

  beforeEach(() => {
    builder = new DPPBuilder();
  });

  it("should initialize with default type and context", () => {
    expect(builder.get("type")).toEqual([
      "DigitalProductPassport",
      "VerifiableCredential",
    ]);
    expect(builder.get("@context")).toEqual([
      "https://www.w3.org/ns/credentials/v2",
      "https://test.uncefact.org/vocabulary/untp/dpp/0.5.0/",
    ]);
  });

  it("should set id", () => {
    const id = "test-id";
    builder.id(id);
    expect(builder.get("id")).toBe(id);
  });

  it("should set product", () => {
    const product: Product = {
      id: "product-id",
      name: "Test Product",
    };
    builder.product(product);
    expect(builder.get("credentialSubject")).toEqual(product);
  });

  it("should set issuer", () => {
    const issuer: CredentialIssuer = {
      id: "issuer-id",
      name: "Test Issuer",
    };
    builder.issuer(issuer);
    expect(builder.get("issuer")).toEqual(issuer);
  });

  describe("validFrom", () => {
    beforeEach(() => {
      // Mock current date to 2024-03-20
      vi.useFakeTimers();
      vi.setSystemTime(new Date("2024-03-20"));
    });

    afterEach(() => {
      vi.useRealTimers();
    });

    it("should set validFrom with string date", () => {
      const date = "2024-03-20";
      builder.validFrom(date);
      expect(builder.get("validFrom")).toBe(date);
    });

    it("should set validFrom with Date object", () => {
      const date = new Date("2024-03-20");
      builder.validFrom(date);
      expect(builder.get("validFrom")).toBe("2024-03-20");
    });

    it("should throw error if validFrom is earlier than current date", () => {
      const date = "2024-03-19";
      expect(() => builder.validFrom(date)).toThrow(
        "validFrom date cannot be earlier than the current date."
      );
    });
  });

  describe("validUntil", () => {
    beforeEach(() => {
      // Mock current date to 2024-03-20
      vi.useFakeTimers();
      vi.setSystemTime(new Date("2024-03-20"));
    });

    afterEach(() => {
      vi.useRealTimers();
    });

    it("should set validUntil with string date", () => {
      const date = "2024-03-19";
      builder.validUntil(date);
      expect(builder.get("validUntil")).toBe(date);
    });

    it("should set validUntil with Date object", () => {
      const date = new Date("2024-03-19");
      builder.validUntil(date);
      expect(builder.get("validUntil")).toBe("2024-03-19");
    });

    it("should throw error if validUntil is later than current date", () => {
      const date = "2024-03-21";
      expect(() => builder.validUntil(date)).toThrow(
        "validUntil date cannot be later than the current date."
      );
    });
  });

  it("should build a complete DPP", () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2024-03-20"));

    const dpp = builder
      .id("test-id")
      .issuer({
        id: "issuer-id",
        name: "Test Issuer",
      })
      .validFrom("2024-03-20")
      .validUntil("2024-03-19")
      .build();

    expect(dpp).toEqual({
      type: ["DigitalProductPassport", "VerifiableCredential"],
      "@context": [
        "https://www.w3.org/ns/credentials/v2",
        "https://test.uncefact.org/vocabulary/untp/dpp/0.5.0/",
      ],
      id: "test-id",
      issuer: {
        id: "issuer-id",
        name: "Test Issuer",
      },
      validFrom: "2024-03-20",
      validUntil: "2024-03-19",
    });

    vi.useRealTimers();
  });
});
