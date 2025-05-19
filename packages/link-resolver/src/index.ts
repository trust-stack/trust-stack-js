import {Mixin} from "ts-mixer";
import {LinkClient} from "./link";
import {ResolveUrlClient} from "./resolve-url";

export class LinkResolverClient extends Mixin(ResolveUrlClient, LinkClient) {}
