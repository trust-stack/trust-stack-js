import {Type} from "class-transformer";
import {IsArray, IsOptional, IsString, ValidateNested} from "class-validator";

export type Environment = "production" | "sandbox";

export class EventTag {
  @IsString()
  code: string;

  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  /** Description of what the event tag does */
  description?: string;
}

export class TrustStackConfig {
  @IsArray()
  @ValidateNested({each: true})
  @Type(() => EventTag)
  @IsOptional()
  eventTags?: EventTag[] = [];
}
