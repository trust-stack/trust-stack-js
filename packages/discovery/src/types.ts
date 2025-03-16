export enum NodeType {
  DCC = "DCC",
  DPP = "DPP",
}

export enum EdgeType {
  ConformityInformation = "CONFORMITY_INFORMATION",
}

export type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;
