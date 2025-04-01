import {AdminClient} from "@truststack/admin";
import {CanvasClient} from "@truststack/canvas";
import {TrustStackClient} from "@truststack/core";
import {DidClient} from "@truststack/did";
import {HermesClient} from "@truststack/hermes";
import {UntpClient} from "@truststack/untp";

export {loadConfig} from "./apply-config";
export * from "./types";

export class TrustStack extends TrustStackClient {
  private _did?: DidClient;
  private _hermes?: HermesClient;
  private _canvas?: CanvasClient;
  private _admin?: AdminClient;
  private _untp?: UntpClient;

  public get did(): DidClient {
    if (!this._did) {
      this._did = new DidClient();
    }
    return this._did;
  }

  public get hermes(): HermesClient {
    if (!this._hermes) {
      this._hermes = new HermesClient();
    }
    return this._hermes;
  }

  public get canvas(): CanvasClient {
    if (!this._canvas) {
      this._canvas = new CanvasClient();
    }
    return this._canvas;
  }

  public get admin(): AdminClient {
    if (!this._admin) {
      this._admin = new AdminClient();
    }
    return this._admin;
  }

  public get untp(): UntpClient {
    if (!this._untp) {
      this._untp = new UntpClient();
    }
    return this._untp;
  }
}
