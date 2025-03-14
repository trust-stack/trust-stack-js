export enum NodeType {
  DIGITAL_CONFORMITY_CREDENTIAL = "DIGITAL_CONFORMITY_CREDENTIAL",
  DIGITAL_PRODUCT_PASSPORT = "DIGITAL_PRODUCT_PASSPORT",
}

export enum EdgeType {
  ConformityInformation = "CONFORMITY_INFORMATION",
}

export type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;
