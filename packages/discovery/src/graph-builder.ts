import { Store } from "n3";
import { LinkMap } from "./link-map";
import { MapperRegistry } from "./mapper-registry";

export type NodeData = {
  type: string[];
  [key: string]: any;
};

type GraphBuilderProps = {
  readonly registry: MapperRegistry;
  readonly linkMap: LinkMap;
};

export class GraphBuilder {
  private store: Store = new Store();
  private registry: MapperRegistry;
  public readonly linkMap: LinkMap;

  constructor({ registry, linkMap }: GraphBuilderProps) {
    this.registry = registry;
    this.linkMap = linkMap;
  }

  public addNode(data: NodeData) {
    const mappers = data.type.map((type) => this.registry.getMapper(type));
    mappers
      .filter((mapper) => !!mapper)
      .forEach((mapper) => mapper?.map(data, this.store, this.linkMap));
  }

  public getGraph(): Store {
    return this.store;
  }
}
