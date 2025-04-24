import "reflect-metadata";

import {beforeEach, describe, it} from "vitest";
import {TrustStack} from ".";
import {TestUtils} from "./test-utils";

describe("AdminStackClient", () => {
  beforeEach(() => {
    TestUtils.Init();
  });

  describe("request handling", () => {
    it("should make requests with correct headers from static config.", async () => {
      // Act: Create admin client
      const adminClient = new TrustStack({
        accessToken: "test-token",
        organizationId: "test-org-id",
      });
      await adminClient.getOrganization("123");

      // Assert: Check that the request was made with the correct headers
      TestUtils.assertHeaders({
        Authorization: "Bearer test-token",
        "X-Organization-Id": "test-org-id",
      });
    });

    it("should make requests with correct headers from request options.", async () => {
      // Act: Create admin client
      const adminClient = new TrustStack({
        accessToken: "test-token",
      });

      // Act: Make request
      await adminClient.getOrganization("123", {
        accessToken: "other-token",
        organizationId: "other-org-id",
      });

      // Assert: Check that the request was made with the correct headers
      TestUtils.assertHeaders({
        Authorization: "Bearer other-token",
        "X-Organization-Id": "other-org-id",
      });
    });

    it("should include tenant user ID header when configured in constructor.", async () => {
      // Act: Create admin client and make request
      const adminClient = new TrustStack({
        accessToken: "test-token",
        organizationId: "test-org-id",
        tenantUserId: "test-tenant-user-id",
      });
      await adminClient.getOrganization("123");

      // Assert: Check that the request was made with the tenant user ID header
      TestUtils.assertHeaders({
        Authorization: "Bearer test-token",
        "X-Organization-Id": "test-org-id",
        "X-Tenant-User-Id": "test-tenant-user-id",
      });
    });

    it("should include tenant user ID header when provided in request options.", async () => {
      // Act: Create admin client
      const adminClient = new TrustStack({
        accessToken: "other-token",
      });

      // Act: Make request with tenant user ID
      await adminClient.getOrganization("123", {
        organizationId: "other-org-id",
        tenantUserId: "other-tenant-user-id",
      });

      // Assert: Check that the request was made with the tenant user ID header
      TestUtils.assertHeaders({
        Authorization: "Bearer other-token",
        "X-Organization-Id": "other-org-id",
        "X-Tenant-User-Id": "other-tenant-user-id",
      });
    });
  });
});
