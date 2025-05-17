import {Mixin} from "ts-mixer";
import {EventSchemaClient} from "./event-schema";
import {OrganizationClient} from "./organization";
import {SandboxClient} from "./sandbox";

export class AdminClient extends Mixin(
  OrganizationClient,
  EventSchemaClient,
  SandboxClient
) {}
