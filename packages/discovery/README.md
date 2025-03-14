# Getting Started

Mapping a transparency graph requires a **Mapper Registry**, a **Graph Builder**, and a **Link map**. This package provides a default registry called `CoreRegistry` that will handle mapping the base UNTP Types (think Digital Product Passport, Digital Traceability Event, and so fourth) to the underlying `n3` dataset.

```typescript
import {
  CoreRegistry,
  GraphBuilder,
  LinkMap,
} from "@trustprovenance/graph-builder";

// Create a Empty Link Map
const linkMap = new LinkMap();

// Fetch the Digital Product Passport, as an example via a HTTP GET request.
const digitalProductPassport = await fetch("GET", {
  url: "https://acme.com/dpp.json",
});

// Insert a link reference from the URL to the ID of the resolved passport
// Where `product-id` is found within the DPP itself
// TODO: Should we be using hashes of these documents instead?
linkMap.addLink("https://acme.com/dpp.json", "product-id");

// Use the `CoreRegistry` as a standard set of mappers
const registry = new CoreRegistry();

// Instantiate the graph builder
const builder = new GraphBuilder({
  registry,
});

// Add to the builder
builder.addNode(DPP);

// Repeat until Transparency Graph is traversed.

// Once complete, you can get the `n3` store from the builder.
const n3Store = builder.getGraph();
```

# The Foundations

The Graph Builder has three fundamental components for operation:

- A **Mapper Registry**
- A **Link Map**
- A **Graph Builder**

## Mapper Registry

A **Mapper Registry** is just a simple `Map` datatype that will map a payload `type` to a mapper function. The `type` is equivalent to a value found in the `type` array of UNTP data types (i.e. `DigitalProductPassport`, `VerifiableCredential`, and so fourth).

The **mapper function** return will take this JSON payload, and a `n3` `DataStore` and add to the dataset the relevant `subject`, `predicate`, and `object`'s that should be extracted.

```typescript
// The `CoreRegistry` is a "out-of-the-box" registry for handling the basic UNTP data types.
import { CoreRegistry } from "@trustprovenance/graph-builder";
import { DataStore } from "n3";

const registry = new CoreRegistry();
const store = new DataStore();

// Example JSON payload of a Digital Product Passport
const example = { type: ["DigitalProductPassport", "VerifiableCredential"] };

// We can see the JSON payload is a Digital Product Passort, but in practice the `GraphBuilder` handles this for us.
const mapper = CoreRegistry.get("DigitalProductPassport");

// Add the relevant RDF triples to the tore
mapper.map(example, store);
```

The above code is something you would ideally not have to write as the **Graph Builder** handles this for you.

### Extending the Mapper Registry

Since the UNTP supports extensions, so does `@trustprovenance/graph-builder`. Your industry map have an extension beyond the core UNTP types (such as the Australian Agriculture Transparency Protocol). You can build your own `Mapper` and add it to a `MapperRegistry` which is used to instantiate a `GraphBuilder`.

Let's take a `DigitalLivestockPassport` from the `AATP` as an example. This _extends_ a `DigitalProductPassport` with additional attributes we may want to capture.

```json
{
    "type": ["DigitalLivestockPassport", "DigitalProductPassport", "VerifiableCredential"],
    ...TODO
}
```

We can then create a mapper that handles this.

```typescript
// ./digital-livestock-passport.ts
import { Mapper } from "@trustprovenance/graph-builder";
import { DigitalLivestockPassport } from "some type definition you have";

export class DigitalLivestockPassportMapper
  implements Mapper<DigitalLivestockPassport>
{
  map(data: DigitalLivestockPassport, store: Store): void {
    // Add to `n3` store as required! Up to you!
  }
}
```

and create a custom registry,

```typescript
import { CoreRegistry, GraphBuilder } from "@trustprovenance/graph-builder";
import { DigitalLivestockPassportMapper } from "./digital-livestock-passport";

// Let's extend the base UNTP registry
const registry = new CoreRegistry();

// And add our own.
registry.register("DigitalLivestockPassport", DigitalLivestockPassportMapper);
```

We can then use this Mapper Registry for Graph building.

```typescript
import { GraphBuilder } from "@trustprovenance/graph-builder";

const builder = new GraphBuilder({ registry });
```

## Link Map

A `LinkMap` maintains a reference between URLs/identifiers present in the Transparency Graph and the IDs of documents resolved via those URLs or identifiers. This package makes no attempt to resolve these itself, as resolution may require authentication or knowledge about the specific supply chain to function. As such, when traversing the Transparency graph within your own implementation, constructing this `LinkMap` as you do is advised.

```typescript
// Fetch the Digital Product Passport, as an example via a HTTP GET request.
const digitalProductPassport = await fetch("GET", {
  url: "https://acme.com/dpp.json",
});

// Where `product-id` is found within the DPP itself
linkMap.addLink("https://acme.com/dpp.json", "product-id");
```

# Outstanding Questions & Concerns

1. Globally Unique IDs for payloads

Most types in the UNTP have a `id` parameter, i.e. a `DigitalProductPassport` has a `id` field on the `Product` type. This can be used in the RDF dataset to add unique identifiers to subjects, and used for references. But can we _guarantee_ that it is always unique? Someone could issue a passport with a falsified `id` value.
