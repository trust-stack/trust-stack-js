import {AdminClient} from "@truststack/admin";
import {BioLockClient} from "@truststack/biolock";
import {CanvasClient} from "@truststack/canvas";
import {TrustStackClient} from "@truststack/core";
import {DidClient} from "@truststack/did";
import {DiscoveryClient} from "@truststack/discovery";
import {EventClient} from "@truststack/event";
import {LinkResolverClient} from "@truststack/link-resolver";
import {MasterDataClient} from "@truststack/master-data";
import {UntpClient} from "@truststack/untp";
export {loadConfig} from "./bin-utils";
export * from "./types";

export class TrustStack extends TrustStackClient {
  private _did?: DidClient;
  private _canvas?: CanvasClient;
  private _admin?: AdminClient;
  private _untp?: UntpClient;
  private _discovery?: DiscoveryClient;
  private _masterData?: MasterDataClient;
  private _event?: EventClient;
  private _linkResolver?: LinkResolverClient;
  private _bioLock?: BioLockClient;

  public get did(): DidClient {
    if (!this._did) {
      this._did = new DidClient();
    }
    return this._did;
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

  public get discovery(): DiscoveryClient {
    if (!this._discovery) {
      this._discovery = new DiscoveryClient();
    }
    return this._discovery;
  }

  public get masterData(): MasterDataClient {
    if (!this._masterData) {
      this._masterData = new MasterDataClient();
    }
    return this._masterData;
  }

  public get event(): EventClient {
    if (!this._event) {
      this._event = new EventClient();
    }
    return this._event;
  }

  public get linkResolver(): LinkResolverClient {
    if (!this._linkResolver) {
      this._linkResolver = new LinkResolverClient();
    }
    return this._linkResolver;
  }

  public get biolock(): BioLockClient {
    if (!this._bioLock) {
      this._bioLock = new BioLockClient();
    }
    return this._bioLock;
  }
}
