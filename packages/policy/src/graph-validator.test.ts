import {DataFactory, Store} from "n3";
import {describe, expect, it} from "vitest";
import {GraphValidator} from "./graph-validator";

describe("graph-validator", () => {
  it("can verify a graph against a SHACL shape", async () => {
    const dataset = simpleDataset();

    const validator = new GraphValidator(simpleShacl);
    await validator.init();
    const result = await validator.validate(dataset);

    expect(result.conforms).toEqual(true);
  });
});

/**
 * Create simple dataset of:
 *     "A" => conformityClaims "B"
 */
const simpleDataset = () => {
  const dataset = new Store();

  // Add "A" Passport
  dataset.addQuad(
    DataFactory.quad(
      DataFactory.namedNode(ex("A")),
      DataFactory.namedNode(rdf("type")),
      DataFactory.namedNode(ex("PASSPORT"))
    )
  );

  // Add "B" Credential
  dataset.addQuad(
    DataFactory.quad(
      DataFactory.namedNode(ex("B")),
      DataFactory.namedNode(rdf("type")),
      DataFactory.namedNode(ex("CONFORMITY"))
    )
  );

  // Add "B" as conformityClaims of "A"
  dataset.addQuad(
    DataFactory.quad(
      DataFactory.namedNode(ex("A")),
      DataFactory.namedNode(ex("conformityClaims")),
      DataFactory.namedNode(ex("B"))
    )
  );

  return dataset;
};

const simpleShacl = `
@prefix sh: <http://www.w3.org/ns/shacl#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
@prefix ex: <http://tprov.io/ns#> .

ex:PassportShape 
    a sh:NodeShape ;
    sh:targetClass ex:PASSPORT ; 
    sh:property [
        sh:path ex:conformityClaims ;             
        sh:class ex:CONFORMITY ;                    
        sh:maxCount 1 ;                             
    ] .
`;

export const ex = (str: string) => `http://tprov.io/ns#${str}`;

export const stripEx = (str: string) => str.replace("http://tprov.io/ns#", "");

export const rdf = (str: string) =>
  `http://www.w3.org/1999/02/22-rdf-syntax-ns#${str}`;
