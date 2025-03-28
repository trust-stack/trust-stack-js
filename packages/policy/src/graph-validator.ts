import rdfDataModel from "@rdfjs/data-model";
import rdfDataset from "@rdfjs/dataset";
import formats from "@rdfjs/formats-common";
import {Readable} from "readable-stream";
import {Validator} from "shacl-engine";
import {validations as sparqlValidations} from "shacl-engine/sparql.js";

type ValidationResult = {
  readonly conforms: boolean;
};

export class GraphValidator {
  // @ts-ignore
  private validator: Validator;

  constructor(private shacl: string) {}

  public async init() {
    const shapes = await this.shaclToQuads(this.shacl);

    this.validator = new Validator(shapes, {
      factory: rdfDataModel,
      debug: true,
      validators: sparqlValidations,
    });
  }

  // @ts-ignore
  public async validate(dataset: Store): Promise<ValidationResult> {
    // Validate graph
    const report = await this.validator.validate({dataset});

    return {
      conforms: report.conforms,
    };
  }

  private async shaclToQuads(shacl: string) {
    const parser = formats.parsers.get("text/turtle");

    const shapes = rdfDataset.dataset();

    for await (const quad of parser.import(Readable.from(shacl))) {
      shapes.add(quad);
    }

    return shapes;
  }
}
