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
import {Mixin} from "ts-mixer";
export {loadConfig} from "./bin-utils";
export * from "./types";

export class TrustStack extends Mixin(
  AdminClient,
  BioLockClient,
  CanvasClient,
  DiscoveryClient,
  EventClient,
  LinkResolverClient,
  MasterDataClient,
  UntpClient,
  DidClient,
  TrustStackClient
) {}
