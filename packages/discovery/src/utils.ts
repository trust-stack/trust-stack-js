import * as hash from "object-hash";

export function hashDoc(doc: object | JSON): string {
  return hash(doc);
}
