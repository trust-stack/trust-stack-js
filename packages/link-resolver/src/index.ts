import {Mixin} from "ts-mixer";
import {LinkAnchorClient} from "./link-anchor";
import {LinkSetClient} from "./link-set";
import {ResolveUrlClient} from "./resolve-url";

export class LinkResolverClient extends Mixin(
  LinkSetClient,
  LinkAnchorClient,
  ResolveUrlClient
) {}
