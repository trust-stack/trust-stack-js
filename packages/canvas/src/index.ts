import {Mixin} from "ts-mixer";
import {CanvasTemplateClient} from "./canvas-template";
import {ThemeClient} from "./theme";

export class CanvasClient extends Mixin(CanvasTemplateClient, ThemeClient) {}
