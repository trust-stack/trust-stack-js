import {Mixin} from "ts-mixer";
import {EventTagClient} from "./event-tag";
import {OrganizationClient} from "./organization";
import {SandboxClient} from "./sandbox";

export class AdminClient extends Mixin(
  OrganizationClient,
  EventTagClient,
  SandboxClient
) {}
