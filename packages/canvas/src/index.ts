import {Mixin} from "ts-mixer";
import {CanvasTemplateClient} from "./canvas-template";
import {CanvasTemplateInstanceClient} from "./canvas-template-instance";
import {ThemeClient} from "./theme";

export class CanvasClient extends Mixin(
  CanvasTemplateClient,
  CanvasTemplateInstanceClient,
  ThemeClient
) {}
