import { Store } from "n3";
import { LinkMap } from "./link-map";

export interface Mapper<T> {
  map(data: T, store: Store, linkMap: LinkMap): void;
}

export class MapperRegistry {
  protected mappers: Map<string, Mapper<any>> = new Map();

  public register<T>(type: string, mapper: Mapper<T>) {
    this.mappers.set(type, mapper);
  }

  public getMapper<T>(type: string): Mapper<T> {
    return this.mappers.get(type) as Mapper<T>;
  }
}
