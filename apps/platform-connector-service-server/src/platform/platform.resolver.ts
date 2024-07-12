import * as graphql from "@nestjs/graphql";
import { PlatformResolverBase } from "./base/platform.resolver.base";
import { Platform } from "./base/Platform";
import { PlatformService } from "./platform.service";

@graphql.Resolver(() => Platform)
export class PlatformResolver extends PlatformResolverBase {
  constructor(protected readonly service: PlatformService) {
    super(service);
  }
}
