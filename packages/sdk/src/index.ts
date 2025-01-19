import {AdminClient} from "@truststack/admin";
import {CanvasClient} from "@truststack/canvas";
import {TrustStackClient} from "@truststack/core";
import {DidClient} from "@truststack/did";
import {HermesClient} from "@truststack/hermes";

export class TrustStack extends TrustStackClient {
  public readonly did = new DidClient();
  public readonly hermes = new HermesClient();
  public readonly canvas = new CanvasClient();
  public readonly admin = new AdminClient();
}
