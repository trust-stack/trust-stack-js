import {
  CredentialIssuerBuilder,
  DPPBuilder,
  ProductBuilder,
} from "@truststack/untp-builder";

const credentialIssuer = CredentialIssuerBuilder.create()
  .id("did:web:trustlink.dev/acme")
  .name("ACME Inc.")
  .build();

const product = ProductBuilder.create().id("foo").name("bar").build();

DPPBuilder.create()
  .issuer(credentialIssuer)
  .id("https://example.com/id")
  .credentialSubject(product)
  .build();
