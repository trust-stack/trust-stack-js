import {Mixin} from "ts-mixer";
import {LinkAnchorClient} from "./link-anchor";
import {LinkSetClient} from "./link-set";

export class LinkResolverClient extends Mixin(
  LinkSetClient,
  LinkAnchorClient
) {}
