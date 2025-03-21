/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * This abstract event structure provides a common language to describe supply chain events such as shipments, inspections, manufacturing processes, etc. There are four types of EPCIS event but this is an abstract class representing all common properties of an EPCIS event.
 */
export type Event = TransformationEvent | ObjectEvent | AggregationEvent | TransactionEvent | AssociationEvent;

/**
 * An array of Traceability Events as a VC
 */
export interface DTE {
  type?: ("DigitalTraceabilityEvent" | "VerifiableCredential")[];
  /**
   * A unique identifier (URI) assigned to the product passport. May be a UUID
   */
  id: string;
  /**
   * A list of JSON-LD context URIs that define the semantic meaning of properties within the credential.
   */
  "@context": ("https://www.w3.org/ns/credentials/v2" | "https://test.uncefact.org/vocabulary/untp/dte/0.5.0/")[];
  issuer: CredentialIssuer;
  /**
   * The date and time from which the credential is valid.
   */
  validFrom?: string;
  /**
   * VC subject is the transaction event structure
   */
  credentialSubject?: Event[];
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
 * Transformation represents an event in which input objects are fully or partially consumed and output objects are produced, such that any of the input objects may have contributed to all of the output objects - for example consuming bales of cotton to produce yarn.
 */
export interface TransformationEvent {
  type?: ("TransformationEvent" | "Event")[];
  /**
   * The unique identifier of this event - SHOULD be a UUID
   */
  id?: string;
  /**
   * A human readable name for industry specific process represented by this event.
   */
  processType?: string;
  /**
   * The ISO-8601 date time when the event occurred.
   */
  eventTime?: string;
  /**
   * Code describing how an event relates to the life-cycle of the entity impacted by the event.
   */
  action?: "observe" | "add" | "delete";
  /**
   * Disposition code describing the state of the item after the event.
   *
   *     This is an enumerated value, but the list of valid values are too big, or change too often to include here. You can access the list of allowable values at this URL:  https://ref.gs1.org/cbv/Disp
   *
   */
  disposition?: string;
  /**
   * A business step code drawn from a controlled vocabulary.
   *
   *     This is an enumerated value, but the list of valid values are too big, or change too often to include here. You can access the list of allowable values at this URL:  https://ref.gs1.org/cbv/BizStep
   *
   */
  bizStep?: string;
  /**
   * A Business Location is a uniquely identified and discretely recorded geospatial location that is meant to designate the specific place where an object is assumed to be following an event until it is reported to be at a different Business Location by a subsequent event. The bizLocation must be a resolvable URI that links to facility information and geo-location data.
   */
  bizLocation?: string;
  /**
   * An array (one for each sensor) of sensor device data sets associated with the event.
   */
  sensorElementList?: SensorElement[];
  /**
   * The list of uniquely identified items that are the output of this transformation event - for example a list of individually identified bolts of cloth that are the output of a weaving process.
   */
  outputEPCList?: Item1[];
  /**
   * The list of uniquely identified items that are the input of this transformation event - for example a list of individually identified bobbins of yarn that are the input of a weaving process.
   */
  inputEPCList?: Item1[];
  /**
   * The quantified list of product classes that are the input of this transformation event - used when each item does not have a unique identity.  for example the weight of raw cotton that is the input to a ginning process.
   */
  inputQuantityList?: QuantityElement[];
  /**
   * The quantified list of product classes that are the output of this transformation event - used when each item does not have a unique identity.  for example a count of the bales of cleaned cotton that are the output of a ginning process.
   */
  outputQuantityList?: QuantityElement[];
  [k: string]: unknown;
}
/**
 * A SensorElement is used to carry data related to an event that is captured one sensor such as an IoT device. Include one sensor property and an array of sensor data values.
 */
export interface SensorElement {
  type?: "SensorElement"[];
  sensorMetadata?: Sensor;
  /**
   * A list of sensor readings from the given sensor relevant to the traceability event context.
   */
  sensorReport?: SensorData[];
  /**
   * An optional reference to a verifiable credential signed by the sensor device or device manufacturer that contains the digitally signed raw data associated with this sensor report.
   */
  sensorIntegrityProof?: string;
}
/**
 * Data that describes the physical sensor that recorded the sensor data set.
 */
export interface Sensor {
  type?: "Sensor"[];
  device?: Item;
  /**
   * The data processing method used by the sensor - should reference a documented standard criteria as a URI
   */
  dataProcessingMethod?: string;
}
/**
 * The device Identifier for the sensor as a URI (typically an EPC)
 */
export interface Item {
  type?: "Item"[];
  /**
   * The globally unique ID of the product as a URI. Ideally as a resolvable URL according to ISO 18975.
   */
  id: string;
  /**
   * The name of the product class to which the product item belongs.
   */
  name: string;
}
/**
 * A data point read by a sensor.
 */
export interface SensorData {
  type?: "SensorData"[];
  /**
   * the timestamp at which the sensor reading was made.
   */
  time?: string;
  /**
   * the measurement type of the sensor reading, as a URI reference to a measurement method specification.
   */
  sensorType?: string;
  /**
   * the sensor reading
   */
  value?: number;
  /**
   * the unit of measure for the sensor reading, drawn from UNECE rec20 code list.
   *
   *     This is an enumerated value, but the list of valid values are too big, or change too often to include here. You can access the list of allowable values at this URL:  https://vocabulary.uncefact.org/UnitMeasureCode
   *
   */
  uom?: string;
}
/**
 * A specific serialised trade item which is an instance of a more generic product.
 */
export interface Item1 {
  type?: "Item"[];
  /**
   * The globally unique ID of the product as a URI. Ideally as a resolvable URL according to ISO 18975.
   */
  id: string;
  /**
   * The name of the product class to which the product item belongs.
   */
  name: string;
}
/**
 * The quantity element is used to define the quantity (eg 100 kg of a product class. Used when serialised items are not applicable.
 */
export interface QuantityElement {
  type?: "QuantityElement"[];
  /**
   * THe identifier of a product class (as opposed to a product instance) such as a GTIN code for a manufactured product.
   */
  productId: string;
  /**
   * The registered name of the product within the identifier scheme.
   */
  productName: string;
  /**
   * The numeric quantity of the product class (eg 100 kg of cotton)
   */
  quantity: number;
  /**
   * The unit of measure for the quantity value (eg Kg or meters etc) using the UNECE Rec 20 unit of measure codelist.
   *
   *     This is an enumerated value, but the list of valid values are too big, or change too often to include here. You can access the list of allowable values at this URL:  https://vocabulary.uncefact.org/UnitMeasureCode
   *
   */
  uom?: string;
}
/**
 * Object represents an event that happened to one or more physical or digital objects - such as an inspection or certification of a product or shipment. The physical objects may be identified either as specific items (eg a unique consignment number) or as a quantified amount of a product class (eg 100Kg of cotton yarn)
 */
export interface ObjectEvent {
  type?: ("ObjectEvent" | "Event")[];
  /**
   * The unique identifier of this event - SHOULD be a UUID
   */
  id?: string;
  /**
   * A human readable name for industry specific process represented by this event.
   */
  processType?: string;
  /**
   * The ISO-8601 date time when the event occurred.
   */
  eventTime?: string;
  /**
   * Code describing how an event relates to the life-cycle of the entity impacted by the event.
   */
  action?: "observe" | "add" | "delete";
  /**
   * Disposition code describing the state of the item after the event.
   *
   *     This is an enumerated value, but the list of valid values are too big, or change too often to include here. You can access the list of allowable values at this URL:  https://ref.gs1.org/cbv/Disp
   *
   */
  disposition?: string;
  /**
   * A business step code drawn from a controlled vocabulary.
   *
   *     This is an enumerated value, but the list of valid values are too big, or change too often to include here. You can access the list of allowable values at this URL:  https://ref.gs1.org/cbv/BizStep
   *
   */
  bizStep?: string;
  /**
   * A Business Location is a uniquely identified and discretely recorded geospatial location that is meant to designate the specific place where an object is assumed to be following an event until it is reported to be at a different Business Location by a subsequent event. The bizLocation must be a resolvable URI that links to facility information and geo-location data.
   */
  bizLocation?: string;
  /**
   * An array (one for each sensor) of sensor device data sets associated with the event.
   */
  sensorElementList?: SensorElement[];
  /**
   * A list of uniquely identified items (eg specific items serial numbers or tagged shipments / packages) that are the focus of this object event.
   */
  epcList?: Item1[];
  /**
   * A quantified list of product classes (eg GS1 GTINs) that are the focus of this object event
   */
  quantityList?: QuantityElement[];
  [k: string]: unknown;
}
/**
 * Aggregation represents an event that happened to one or more objects that are physically aggregated together (physically constrained to be in the same place at the same time, as when cases are aggregated to a pallet).  This event is also used to represent de-aggregation (eg unpacking) when businessStepCode is unpacking.
 */
export interface AggregationEvent {
  type?: ("AggregationEvent" | "Event")[];
  /**
   * The unique identifier of this event - SHOULD be a UUID
   */
  id?: string;
  /**
   * A human readable name for industry specific process represented by this event.
   */
  processType?: string;
  /**
   * The ISO-8601 date time when the event occurred.
   */
  eventTime?: string;
  /**
   * Code describing how an event relates to the life-cycle of the entity impacted by the event.
   */
  action?: "observe" | "add" | "delete";
  /**
   * Disposition code describing the state of the item after the event.
   *
   *     This is an enumerated value, but the list of valid values are too big, or change too often to include here. You can access the list of allowable values at this URL:  https://ref.gs1.org/cbv/Disp
   *
   */
  disposition?: string;
  /**
   * A business step code drawn from a controlled vocabulary.
   *
   *     This is an enumerated value, but the list of valid values are too big, or change too often to include here. You can access the list of allowable values at this URL:  https://ref.gs1.org/cbv/BizStep
   *
   */
  bizStep?: string;
  /**
   * A Business Location is a uniquely identified and discretely recorded geospatial location that is meant to designate the specific place where an object is assumed to be following an event until it is reported to be at a different Business Location by a subsequent event. The bizLocation must be a resolvable URI that links to facility information and geo-location data.
   */
  bizLocation?: string;
  /**
   * An array (one for each sensor) of sensor device data sets associated with the event.
   */
  sensorElementList?: SensorElement[];
  parentEPC?: Item2;
  /**
   * The list of child items that have been aggregated into the parent (or dis-aggregated from the parent). Maybe a list of package references (eg boxes on a pallet) or may be individual items (eg products in a box).
   */
  childEPCList?: Item1[];
  /**
   * List of quantified product classes that have been aggregated into the parent.  Used when the child items do not have unique identifiers (eg 100 Kg of cotton bales)
   */
  childQuantityList?: QuantityElement[];
  [k: string]: unknown;
}
/**
 * A specific serialised trade item which is an instance of a more generic product.
 */
export interface Item2 {
  type?: "Item"[];
  /**
   * The globally unique ID of the product as a URI. Ideally as a resolvable URL according to ISO 18975.
   */
  id: string;
  /**
   * The name of the product class to which the product item belongs.
   */
  name: string;
}
/**
 * Transaction represents an event in which one or more objects become associated or disassociated with one or more identified business transactions - such as the purchase / shipment of goods between buyer and seller.
 */
export interface TransactionEvent {
  type?: ("TransactionEvent" | "Event")[];
  /**
   * The unique identifier of this event - SHOULD be a UUID
   */
  id?: string;
  /**
   * A human readable name for industry specific process represented by this event.
   */
  processType?: string;
  /**
   * The ISO-8601 date time when the event occurred.
   */
  eventTime?: string;
  /**
   * Code describing how an event relates to the life-cycle of the entity impacted by the event.
   */
  action?: "observe" | "add" | "delete";
  /**
   * Disposition code describing the state of the item after the event.
   *
   *     This is an enumerated value, but the list of valid values are too big, or change too often to include here. You can access the list of allowable values at this URL:  https://ref.gs1.org/cbv/Disp
   *
   */
  disposition?: string;
  /**
   * A business step code drawn from a controlled vocabulary.
   *
   *     This is an enumerated value, but the list of valid values are too big, or change too often to include here. You can access the list of allowable values at this URL:  https://ref.gs1.org/cbv/BizStep
   *
   */
  bizStep?: string;
  /**
   * A Business Location is a uniquely identified and discretely recorded geospatial location that is meant to designate the specific place where an object is assumed to be following an event until it is reported to be at a different Business Location by a subsequent event. The bizLocation must be a resolvable URI that links to facility information and geo-location data.
   */
  bizLocation?: string;
  /**
   * An array (one for each sensor) of sensor device data sets associated with the event.
   */
  sensorElementList?: SensorElement[];
  /**
   * The source party for this supply chain transaction - typically the seller party
   */
  sourcePartyId: string;
  /**
   * The destination party for this supply chain transaction - typically the buyer party.
   */
  destinationPartyId: string;
  /**
   * The document type representing the trade transaction drawn from the business transaction type vocabulary.
   *
   *     This is an enumerated value, but the list of valid values are too big, or change too often to include here. You can access the list of allowable values at this URL:  https://ref.gs1.org/cbv/BTT
   *
   */
  bizTransaction?: string;
  /**
   * The list of uniquely identified trade items included in this supply chain transaction.
   */
  epcList?: Item1[];
  /**
   * List of quantified product classes that are included in this transaction.  Used when the trade items do not have unique identifiers (eg 100 reels of yarn)
   */
  quantityList?: QuantityElement[];
  [k: string]: unknown;
}
/**
 * The association event represents the assembly of child sub-components to create a parent assembled item. For example a desktop computer assembled from power supply, hard drive, and motherboard.  The association event is very similar in structure to the aggregation event but is used for physical assembly. An association event may represent a bill of materials used to assemble a  product whilst an aggregation event may represent a packing list or items for transport.
 */
export interface AssociationEvent {
  type?: ("AssociationEvent" | "Event")[];
  /**
   * The unique identifier of this event - SHOULD be a UUID
   */
  id?: string;
  /**
   * A human readable name for industry specific process represented by this event.
   */
  processType?: string;
  /**
   * The ISO-8601 date time when the event occurred.
   */
  eventTime?: string;
  /**
   * Code describing how an event relates to the life-cycle of the entity impacted by the event.
   */
  action?: "observe" | "add" | "delete";
  /**
   * Disposition code describing the state of the item after the event.
   *
   *     This is an enumerated value, but the list of valid values are too big, or change too often to include here. You can access the list of allowable values at this URL:  https://ref.gs1.org/cbv/Disp
   *
   */
  disposition?: string;
  /**
   * A business step code drawn from a controlled vocabulary.
   *
   *     This is an enumerated value, but the list of valid values are too big, or change too often to include here. You can access the list of allowable values at this URL:  https://ref.gs1.org/cbv/BizStep
   *
   */
  bizStep?: string;
  /**
   * A Business Location is a uniquely identified and discretely recorded geospatial location that is meant to designate the specific place where an object is assumed to be following an event until it is reported to be at a different Business Location by a subsequent event. The bizLocation must be a resolvable URI that links to facility information and geo-location data.
   */
  bizLocation?: string;
  /**
   * An array (one for each sensor) of sensor device data sets associated with the event.
   */
  sensorElementList?: SensorElement[];
  parentEPC?: Item3;
  /**
   * The list of child items that have been assembled to create the parent - for example the power supply or hard drive components of a desktop computer.
   */
  childEPCList?: Item1[];
  /**
   * List of quantified product classes that have been assembled into the parent.  Used when the child items do not have unique identifiers (eg brackets and screws used in the assembly of a desktop computer)
   */
  childQuantityList?: QuantityElement[];
  [k: string]: unknown;
}
/**
 * A specific serialised trade item which is an instance of a more generic product.
 */
export interface Item3 {
  type?: "Item"[];
  /**
   * The globally unique ID of the product as a URI. Ideally as a resolvable URL according to ISO 18975.
   */
  id: string;
  /**
   * The name of the product class to which the product item belongs.
   */
  name: string;
}
