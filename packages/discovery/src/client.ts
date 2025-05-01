import {Mixin} from "ts-mixer";
import {PolicyClient} from "./policy";
import {TrustGraphClient} from "./trust-graph";

export class DiscoveryClient extends Mixin(PolicyClient, TrustGraphClient) {}
