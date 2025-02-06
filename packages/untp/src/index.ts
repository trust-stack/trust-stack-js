import {Mixin} from "ts-mixer";
import {CredentialIssuerProfileClient} from "./credential-issuer-profile";
import {DppClient} from "./dpp";

export class UntpClient extends Mixin(
  CredentialIssuerProfileClient,
  DppClient
) {}
