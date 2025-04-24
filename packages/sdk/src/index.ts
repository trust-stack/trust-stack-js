import {AdminClient} from "@truststack/admin";
import {BioLockClient} from "@truststack/biolock";
import {CanvasClient} from "@truststack/canvas";
import {TrustStackClient} from "@truststack/core";
import {DidClient} from "@truststack/did";
import {DiscoveryClient} from "@truststack/discovery";
import {EventClient} from "@truststack/event";
import {LinkResolverClient} from "@truststack/link-resolver";
import {MasterDataClient} from "@truststack/master-data";
import {ObjectClient} from "@truststack/object";

export * from "@truststack/core";

export class TrustStack extends TrustStackClient {
  private _admin: AdminClient;
  private _biolock: BioLockClient;
  private _canvas: CanvasClient;
  private _did: DidClient;
  private _discovery: DiscoveryClient;
  private _event: EventClient;
  private _linkResolver: LinkResolverClient;
  private _masterData: MasterDataClient;
  private _object: ObjectClient;

  public get admin() {
    if (!this._admin) {
      this._admin = new AdminClient(this.getProps());
    }
    return this._admin;
  }

  public get biolock() {
    if (!this._biolock) {
      this._biolock = new BioLockClient(this.getProps());
    }
    return this._biolock;
  }

  public get canvas() {
    if (!this._canvas) {
      this._canvas = new CanvasClient(this.getProps());
    }
    return this._canvas;
  }

  public get did() {
    if (!this._did) {
      this._did = new DidClient(this.getProps());
    }
    return this._did;
  }

  public get discovery() {
    if (!this._discovery) {
      this._discovery = new DiscoveryClient(this.getProps());
    }
    return this._discovery;
  }

  public get event() {
    if (!this._event) {
      this._event = new EventClient(this.getProps());
    }
    return this._event;
  }

  public get linkResolver() {
    if (!this._linkResolver) {
      this._linkResolver = new LinkResolverClient(this.getProps());
    }
    return this._linkResolver;
  }

  public get masterData() {
    if (!this._masterData) {
      this._masterData = new MasterDataClient(this.getProps());
    }
    return this._masterData;
  }

  public get object() {
    if (!this._object) {
      this._object = new ObjectClient(this.getProps());
    }
    return this._object;
  }
}
