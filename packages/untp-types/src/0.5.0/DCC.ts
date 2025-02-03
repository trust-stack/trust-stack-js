/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Point3DWrapper = "Point3DWrapper"[] | Point3D[];
/**
 * Point in 3d space
 */
export type Point3D = "Point3D"[] | number[];

/**
 * A conformity attestation issued by a competent body that defines one or more assessments (eg carbon intensity) about a product (eg batttery) against a specification (eg LCA method) defined in a standard or regulation.
 */
export interface DCC {
  type?: ("DigitalConformityCredential" | "VerifiableCredential")[];
  /**
   * A list of JSON-LD context URIs that define the semantic meaning of properties within the credential.
   */
  "@context": ("https://www.w3.org/ns/credentials/v2" | "https://test.uncefact.org/vocabulary/untp/dcc/0.5.0/")[];
  /**
   * A unique identifier (URI) assigned to the product passport. May be a UUID
   */
  id: string;
  issuer: CredentialIssuer;
  /**
   * The date and time from which the credential is valid.
   */
  validFrom?: string;
  /**
   * The expiry date (if applicable) of this verifiable credential.
   */
  validUntil?: string;
  credentialSubject?: ConformityAttestation;
  [k: string]: unknown;
}
/**
 * The organisation that is the issuer of this VC. Note that the "id" property MUST be a W3C DID.  Other identifiers such as tax registration numbers can be listed in the "otherIdentifiers" property.
 */
export interface CredentialIssuer {
  type?: "CredentialIssuer"[];
  /**
   * The W3C DID of the issuer - should be a did:web or did:tdw
   */
  id: string;
  /**
   * The name of the issuer person or organisation
   */
  name: string;
  /**
   * An optional list of other registered identifiers for this credential issuer
   */
  otherIdentifier?: Identifier[];
}
/**
 * The ID and Name of an identified entity such as a product, facility, party, standard, etc.  If the identifier is a W3C DID then the corresponding DID document SHOULD include a serviceEndpoint of type "IdentityResolver". If the identifier is not a W3C DID then the id property SHOULD be an identity resolver URL.
 */
export interface Identifier {
  type?: "Identifier"[];
  /**
   * The globally unique ID of the entity as a resolvable URL according to ISO 18975. ExamplesProduct - id.gs1.org/01/09520123456788/21/12345  Party - abr.business.gov.au/ABN/View?abn=90664869327. Facility - did:web:facilities.example-company.com:123.
   */
  id: string;
  /**
   * The registered name of the entity within the identifier scheme.  Examples: product - EV battery 300Ah, Party - Sample Company Pty Ltd,  Facility - Green Acres battery factory
   */
  name: string;
  /**
   * The registration number (alphanumeric) of the entity within the register. Unique within the register.
   */
  registeredId?: string;
  idScheme?: IdentifierScheme;
}
/**
 * The identifier scheme.  Examples : Product - id.gs1.org/01,  Party - business.gov.au/abn,  Facility - did:web:facilities.acme.com.
 */
export interface IdentifierScheme {
  type?: "IdentifierScheme"[];
  /**
   * The globally unique identifier of the registration scheme. The scheme should be registered and discoverable from vocabulary.uncefact.org/identifierSchemes
   */
  id?: string;
  /**
   * The name of the identifier scheme.
   */
  name?: string;
}
/**
 * The conformity attestation is the subject of the verifiable credential.
 */
export interface ConformityAttestation {
  type?: ("ConformityAttestation" | "Attestation")[];
  /**
   * The globally unique ID of this conformity attestation.
   */
  id: string;
  /**
   * A human readable description of this conformity attestation
   */
  name?: string;
  /**
   * Assurance code pertaining to assessor (relation to the object under assessment)
   */
  assessorLevel: "Self" | "Commercial" | "Buyer" | "Membership" | "Unspecified" | "3rdParty";
  /**
   * Assurance pertaining to assessment (any authority or support for the assessment process)
   */
  assessmentLevel: "GovtApproval" | "GlobalMRA" | "Accredited" | "Verified" | "Validated" | "Unspecified";
  /**
   * The type of criterion (optional or mandatory).
   */
  attestationType:
    | "certification"
    | "declaration"
    | "inspection"
    | "testing"
    | "verification"
    | "validation"
    | "calibration";
  /**
   * A textual description of the scope or purpose of this conformity attestation
   */
  description?: string;
  issuedToParty?: Party;
  /**
   * The authority under which a conformity claim is issued.  For example a national accreditation authority may authorise a test lab to issue test certificates about a product against a standard.
   */
  authorisation?: Endorsement[];
  conformityCertificate?: SecureLink;
  auditableEvidence?: SecureLink1;
  scope?: ConformityAssessmentScheme;
  /**
   * The list of specific assessments made within this conformity attestation.
   */
  assessment?: ConformityAssessment[];
  [k: string]: unknown;
}
/**
 * The party to whom the conformity attestation was issued.
 */
export interface Party {
  type?: "Party"[];
  /**
   * The globally unique ID of the party as a URI, ideally as a resolvable ID.
   */
  id: string;
  /**
   * The registered name of the party within the identifier scheme.
   */
  name: string;
  /**
   * The registration number (alphanumeric) of the Party within the register. Unique within the register.
   */
  registeredId?: string;
  idScheme?: IdentifierScheme1;
  /**
   * An optional short description of the party.
   */
  description?: string;
  [k: string]: unknown;
}
/**
 * The identifier scheme of the party.  Typically a national business register or a global scheme such as GLEIF.
 */
export interface IdentifierScheme1 {
  type?: "IdentifierScheme"[];
  /**
   * The globally unique identifier of the registration scheme. The scheme should be registered and discoverable from vocabulary.uncefact.org/identifierSchemes
   */
  id?: string;
  /**
   * The name of the identifier scheme.
   */
  name?: string;
}
/**
 * The authority under which a conformity claim is issued.  For example a national accreditation authority may authorise a test lab to issue test certificates about a product against a standard.
 */
export interface Endorsement {
  type?: "Endorsement"[];
  /**
   * Globally unique identifier of an accreditation or authority issued to a conformity assessment body by a regulator or national accreditation authority.
   */
  id: string;
  /**
   * The name of the accreditation.
   */
  name: string;
  trustmark?: BinaryFile;
  issuingAuthority: Identifier1;
  endorsementEvidence?: Link;
  [k: string]: unknown;
}
/**
 * The trust mark image awarded by the AB to the CAB to indicate accreditation.
 */
export interface BinaryFile {
  type?: "BinaryFile"[];
  /**
   * A name for referenced binary file
   */
  fileName?: string;
  /**
   * The type of file, represented as a MIME type.
   *
   *     This is an enumerated value, but the list of valid values are too big, or change too often to include here. You can access the list of allowable values at this URL:  https://mimetype.io/all-types
   *
   */
  fileType?: string;
  /**
   * The binary file data encoded as Base64 string.
   */
  file?: string;
}
/**
 * The ID and Name of an identified entity such as a product, facility, party, standard, etc.  If the identifier is a W3C DID then the corresponding DID document SHOULD include a serviceEndpoint of type "IdentityResolver". If the identifier is not a W3C DID then the id property SHOULD be an identity resolver URL.
 */
export interface Identifier1 {
  type?: "Identifier"[];
  /**
   * The globally unique ID of the entity as a resolvable URL according to ISO 18975. ExamplesProduct - id.gs1.org/01/09520123456788/21/12345  Party - abr.business.gov.au/ABN/View?abn=90664869327. Facility - did:web:facilities.example-company.com:123.
   */
  id: string;
  /**
   * The registered name of the entity within the identifier scheme.  Examples: product - EV battery 300Ah, Party - Sample Company Pty Ltd,  Facility - Green Acres battery factory
   */
  name: string;
  /**
   * The registration number (alphanumeric) of the entity within the register. Unique within the register.
   */
  registeredId?: string;
  idScheme?: IdentifierScheme;
}
/**
 * The evidence that supports the authority under which the attestation is issued - for an example an accreditation certificate.
 */
export interface Link {
  type?: "Link"[];
  /**
   * The URL of the target resource.
   */
  linkURL?: string;
  /**
   * A display name for the target resource
   */
  linkName?: string;
  /**
   * The type of the target resource - drawn from a controlled vocabulary
   */
  linkType?: string;
}
/**
 * A reference to the human / printable version of this conformity attestation - typically represented as a PDF document. The document may have more details than are represented in the digital attestation.
 */
export interface SecureLink {
  type?: ("SecureLink" | "Link")[];
  /**
   * The URL of the target resource.
   */
  linkURL?: string;
  /**
   * A display name for the target resource
   */
  linkName?: string;
  /**
   * The type of the target resource - drawn from a controlled vocabulary
   */
  linkType?: string;
  /**
   * The hash of the file.
   */
  hashDigest?: string;
  /**
   * The hashing algorithm used to create the target hash.  SHA-265 is the recommended standard
   */
  hashMethod?: "SHA-256" | "SHA-1";
  /**
   * The symmetric encryption algorithm used to encrypt the link target.  AES is the recommended standard. Decryption keys are expected to be passed out of bounds.
   */
  encryptionMethod?: "none" | "AES";
}
/**
 * Auditable evidence supporting this assessment such as raw measurements, supporting documents. This is usually private data and would normally be encrypted.
 */
export interface SecureLink1 {
  type?: ("SecureLink" | "Link")[];
  /**
   * The URL of the target resource.
   */
  linkURL?: string;
  /**
   * A display name for the target resource
   */
  linkName?: string;
  /**
   * The type of the target resource - drawn from a controlled vocabulary
   */
  linkType?: string;
  /**
   * The hash of the file.
   */
  hashDigest?: string;
  /**
   * The hashing algorithm used to create the target hash.  SHA-265 is the recommended standard
   */
  hashMethod?: "SHA-256" | "SHA-1";
  /**
   * The symmetric encryption algorithm used to encrypt the link target.  AES is the recommended standard. Decryption keys are expected to be passed out of bounds.
   */
  encryptionMethod?: "none" | "AES";
}
/**
 * The scheme(s) under which this conformity assesment is issued.
 */
export interface ConformityAssessmentScheme {
  type?: ("ConformityAssessmentScheme" | "Standard")[];
  /**
   * A unique identifier for the standard (eg https://www.iso.org/standard/60857.html).
   */
  id?: string;
  /**
   * The name of the standard
   */
  name?: string;
  issuingParty: Identifier2;
  /**
   * The date when the standard was issued.
   */
  issueDate?: string;
  trustmark?: BinaryFile1;
  [k: string]: unknown;
}
/**
 * The ID and Name of an identified entity such as a product, facility, party, standard, etc.  If the identifier is a W3C DID then the corresponding DID document SHOULD include a serviceEndpoint of type "IdentityResolver". If the identifier is not a W3C DID then the id property SHOULD be an identity resolver URL.
 */
export interface Identifier2 {
  type?: "Identifier"[];
  /**
   * The globally unique ID of the entity as a resolvable URL according to ISO 18975. ExamplesProduct - id.gs1.org/01/09520123456788/21/12345  Party - abr.business.gov.au/ABN/View?abn=90664869327. Facility - did:web:facilities.example-company.com:123.
   */
  id: string;
  /**
   * The registered name of the entity within the identifier scheme.  Examples: product - EV battery 300Ah, Party - Sample Company Pty Ltd,  Facility - Green Acres battery factory
   */
  name: string;
  /**
   * The registration number (alphanumeric) of the entity within the register. Unique within the register.
   */
  registeredId?: string;
  idScheme?: IdentifierScheme;
}
/**
 * The trust mark that represents the conformity assessment scheme.
 */
export interface BinaryFile1 {
  type?: "BinaryFile"[];
  /**
   * A name for referenced binary file
   */
  fileName?: string;
  /**
   * The type of file, represented as a MIME type.
   *
   *     This is an enumerated value, but the list of valid values are too big, or change too often to include here. You can access the list of allowable values at this URL:  https://mimetype.io/all-types
   *
   */
  fileType?: string;
  /**
   * The binary file data encoded as Base64 string.
   */
  file?: string;
}
/**
 * A specific assessment about the product or facility against a specific specification.  Eg the carbon intensity of a given product or batch.
 */
export interface ConformityAssessment {
  type?: ("ConformityAssessment" | "Declaration")[];
  /**
   * The date on which this assessment was made.
   */
  assessmentDate?: string;
  /**
   * A unique identifier for the declaration. Often this will be an extension of the product.id or attestation.id. But could be a UUID.
   */
  id: string;
  referenceStandard?: Standard;
  referenceRegulation?: Regulation;
  /**
   * The specification against which the assessment is made.
   */
  assessmentCriteria?: Criterion[];
  /**
   * The list of specific values measured as part of this assessment (eg tensile strength)
   */
  declaredValue?: Metric[];
  /**
   * An indicator of whether or not the claim or assesment conforms to the regulatory or standard criteria.
   */
  conformance: boolean;
  /**
   * The conformity topic category for this assessment (eg vocabulary.uncefact.org/sustainability/emissions)
   */
  conformityTopic:
    | "environment.energy"
    | "environment.emissions"
    | "environment.water"
    | "environment.waste"
    | "environment.deforestation"
    | "environment.biodiversity"
    | "circularity.content"
    | "circularity.design"
    | "social.labour"
    | "social.rights"
    | "social.community"
    | "social.safety"
    | "governance.ethics"
    | "governance.compliance"
    | "governance.transparency";
  /**
   * The list of products that are the object of this conformity assessment
   */
  assessedProduct?: Product[];
  /**
   * The list of facilities that are the object of this conformity assessment.
   */
  assessedFacility?: Facility[];
  assessedOrganisation?: Party1;
  auditor?: Party2;
  [k: string]: unknown;
}
/**
 * The reference to the standard that defines the specification / criteria
 */
export interface Standard {
  type?: "Standard"[];
  /**
   * A unique identifier for the standard (eg https://www.iso.org/standard/60857.html).
   */
  id?: string;
  /**
   * The name of the standard
   */
  name?: string;
  issuingParty: Identifier3;
  /**
   * The date when the standard was issued.
   */
  issueDate?: string;
}
/**
 * The ID and Name of an identified entity such as a product, facility, party, standard, etc.  If the identifier is a W3C DID then the corresponding DID document SHOULD include a serviceEndpoint of type "IdentityResolver". If the identifier is not a W3C DID then the id property SHOULD be an identity resolver URL.
 */
export interface Identifier3 {
  type?: "Identifier"[];
  /**
   * The globally unique ID of the entity as a resolvable URL according to ISO 18975. ExamplesProduct - id.gs1.org/01/09520123456788/21/12345  Party - abr.business.gov.au/ABN/View?abn=90664869327. Facility - did:web:facilities.example-company.com:123.
   */
  id: string;
  /**
   * The registered name of the entity within the identifier scheme.  Examples: product - EV battery 300Ah, Party - Sample Company Pty Ltd,  Facility - Green Acres battery factory
   */
  name: string;
  /**
   * The registration number (alphanumeric) of the entity within the register. Unique within the register.
   */
  registeredId?: string;
  idScheme?: IdentifierScheme;
}
/**
 * The reference to the regulation that defines the assessment criteria
 */
export interface Regulation {
  type?: "Regulation"[];
  /**
   * The globally unique identifier of this regulation.
   */
  id?: string;
  /**
   * The name of the regulation or act.
   */
  name?: string;
  /**
   * The legal jurisdiction (country) under which the regulation is issued.
   *
   *     This is an enumerated value, but the list of valid values are too big, or change too often to include here. You can access the list of allowable values at this URL:  https://vocabulary.uncefact.org/CountryId
   *
   */
  jurisdictionCountry?: string;
  administeredBy: Identifier4;
  /**
   * the date at which the regulation came into effect.
   */
  effectiveDate?: string;
}
/**
 * The ID and Name of an identified entity such as a product, facility, party, standard, etc.  If the identifier is a W3C DID then the corresponding DID document SHOULD include a serviceEndpoint of type "IdentityResolver". If the identifier is not a W3C DID then the id property SHOULD be an identity resolver URL.
 */
export interface Identifier4 {
  type?: "Identifier"[];
  /**
   * The globally unique ID of the entity as a resolvable URL according to ISO 18975. ExamplesProduct - id.gs1.org/01/09520123456788/21/12345  Party - abr.business.gov.au/ABN/View?abn=90664869327. Facility - did:web:facilities.example-company.com:123.
   */
  id: string;
  /**
   * The registered name of the entity within the identifier scheme.  Examples: product - EV battery 300Ah, Party - Sample Company Pty Ltd,  Facility - Green Acres battery factory
   */
  name: string;
  /**
   * The registration number (alphanumeric) of the entity within the register. Unique within the register.
   */
  registeredId?: string;
  idScheme?: IdentifierScheme;
}
/**
 * A specific rule or criterion within a standard or regulation. eg a carbon intensity calculation rule within an emissions standard.
 */
export interface Criterion {
  type?: "Criterion"[];
  /**
   * A unique identifier for the criterion within the standard  or regulation. For example CO2 emissions calculations for liquid fuel combustion.
   */
  id: string;
  /**
   * A name that describes this criteria.
   */
  name: string;
  /**
   * A conformity threshold defined by the specification (eg minimum compressive strength)
   */
  thresholdValues?: Metric[];
}
/**
 * A specific measure of performance against the criteria that governs the claim.  Expressed as an array of metric (ie unit of measure) / value (ie the actual numeric value) pairs.
 */
export interface Metric {
  type?: "Metric"[];
  /**
   * A human readable name for this metric (for example "Tensile strength")
   */
  metricName: string;
  metricValue: Measure;
  /**
   * A score or rank associated with this measured metric.
   */
  score?: string;
  /**
   * A percentage represented as a numeric between 0 and 1 indicating the rage of accuracy of the claimed value (eg 0.05 means that the actual value is within 5% of the claimed value.)
   */
  accuracy?: number;
}
/**
 * A numeric value and unit of measure for this metric. Could be a measured value or a specified threshold. Eg {"value":400, "unit":"MPA"} as tensile strength of structural steel
 */
export interface Measure {
  type?: "Measure"[];
  /**
   * The numeric value of the measure
   */
  value: number;
  /**
   * Unit of measure drawn from the UNECE Rec20 measure code list.
   *
   *     This is an enumerated value, but the list of valid values are too big, or change too often to include here. You can access the list of allowable values at this URL:  https://vocabulary.uncefact.org/UnitMeasureCode
   *
   */
  unit: string;
}
/**
 * The product which is the subject of this conformity assessment
 */
export interface Product {
  type?: "Product"[];
  /**
   * The globally unique ID of the product as a URI. Ideally as a resolvable URL according to ISO 18975.
   */
  id: string;
  /**
   * The registered name of the product within the identifier scheme.
   */
  name: string;
  /**
   * The registration number (alphanumeric) of the entity within the register. Unique within the register.
   */
  registeredId?: string;
  idScheme?: IdentifierScheme2;
  /**
   * A number or code representing a specific serialised item of the product. Unique within product class.
   */
  serialNumber?: string;
  /**
   * Identifier of the specific production batch of the product.  Unique within the product class.
   */
  batchNumber?: string;
  /**
   * Indicates whether the conformity assessment body has verified the identity product that is the subject of the assessment.
   */
  IDverifiedByCAB?: boolean;
  [k: string]: unknown;
}
/**
 * The identifier scheme for this product.  Eg a GS1 GTIN or an AU Livestock NLIS, or similar. If self issued then use the party ID of the issuer.
 */
export interface IdentifierScheme2 {
  type?: "IdentifierScheme"[];
  /**
   * The globally unique identifier of the registration scheme. The scheme should be registered and discoverable from vocabulary.uncefact.org/identifierSchemes
   */
  id?: string;
  /**
   * The name of the identifier scheme.
   */
  name?: string;
}
/**
 * The facility which is the subject of this conformity assessment
 */
export interface Facility {
  type?: "Facility"[];
  /**
   * The globally unique ID of the facility as URI, ideally as a resolvable URL.
   */
  id: string;
  /**
   * The registered name of the facility within the identifier scheme.
   */
  name: string;
  /**
   * The registration number (alphanumeric) of the facility within the identifier scheme. Unique within the register.
   */
  registeredId?: string;
  idScheme?: IdentifierScheme3;
  locationInformation?: Location;
  address?: Address;
  /**
   * Indicates whether the conformity assessment body has verified the identity of the facility which is the subject of the assessment.
   */
  IDverifiedByCAB?: boolean;
  [k: string]: unknown;
}
/**
 * The ID scheme of the facility. eg a GS1 GLN or a National land registry scheme. If self issued then use the party ID of the facility owner.
 */
export interface IdentifierScheme3 {
  type?: "IdentifierScheme"[];
  /**
   * The globally unique identifier of the registration scheme. The scheme should be registered and discoverable from vocabulary.uncefact.org/identifierSchemes
   */
  id?: string;
  /**
   * The name of the identifier scheme.
   */
  name?: string;
}
/**
 * Geo-location information for this facility as a resolvable geographic area (a Plus Code), and/or a geo-located point (latitude / longitude), and/or a defined boundary (GeoJSON Polygon).
 */
export interface Location {
  type?: "Location"[];
  /**
   * An open location code (https://maps.google.com/pluscodes/) representing this geographic location or region. Open location codes can represent any sized area from a point to a large region and are easily resolved to a visual map location.
   */
  plusCode?: string;
  geoLocation?: Point;
  geoBoundary?: Polygon;
  [k: string]: unknown;
}
/**
 * The latitude and longitude coordinates that best represent the specified location. Using GeoJSON Point notation.
 */
export interface Point {
  type: "Point";
  /**
   * Coordinates property of type Point3D
   */
  coordinates?: "Point3D"[] | number[];
}
/**
 * The list of ordered coordinates that define a closed area polygon as a location boundary using GeoJSON polygon notation.
 */
export interface Polygon {
  type: "Polygon";
  /**
   * Array of PolygonCoordinates
   */
  coordinates?: Point3DWrapper[];
}
/**
 * The Postal address of the location.
 */
export interface Address {
  type?: "Address"[];
  /**
   * the street address as an unstructured string.
   */
  streetAddress?: string;
  /**
   * The postal code or zip code for this address.
   */
  postalCode?: string;
  /**
   * The city, suburb or township name.
   */
  addressLocality?: string;
  /**
   * The state or territory or province
   */
  addressRegion?: string;
  /**
   * The address country as an ISO-3166 two letter country code.
   *
   *     This is an enumerated value, but the list of valid values are too big, or change too often to include here. You can access the list of allowable values at this URL:  https://vocabulary.uncefact.org/CountryId
   *
   */
  addressCountry?: string;
}
/**
 * The organisation that is the object of this assessment.
 */
export interface Party1 {
  type?: "Party"[];
  /**
   * The globally unique ID of the party as a URI, ideally as a resolvable ID.
   */
  id: string;
  /**
   * The registered name of the party within the identifier scheme.
   */
  name: string;
  /**
   * The registration number (alphanumeric) of the Party within the register. Unique within the register.
   */
  registeredId?: string;
  idScheme?: IdentifierScheme1;
  /**
   * An optional short description of the party.
   */
  description?: string;
  [k: string]: unknown;
}
/**
 * The person or organisations that performed this assessment (if different to the issuer of the parent attestation)
 */
export interface Party2 {
  type?: "Party"[];
  /**
   * The globally unique ID of the party as a URI, ideally as a resolvable ID.
   */
  id: string;
  /**
   * The registered name of the party within the identifier scheme.
   */
  name: string;
  /**
   * The registration number (alphanumeric) of the Party within the register. Unique within the register.
   */
  registeredId?: string;
  idScheme?: IdentifierScheme1;
  /**
   * An optional short description of the party.
   */
  description?: string;
  [k: string]: unknown;
}
