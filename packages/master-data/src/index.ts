import {Mixin} from "ts-mixer";
import {LocationClient} from "./location";
import {PartnerClient} from "./partner";
import {TradeItemClient} from "./trade-item";

export class MasterDataClient extends Mixin(
  PartnerClient,
  LocationClient,
  TradeItemClient
) {}
