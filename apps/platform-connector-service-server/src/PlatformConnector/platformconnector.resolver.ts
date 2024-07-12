import * as graphql from "@nestjs/graphql";
import { PlatformConnectorService } from "./platformconnector.service";

export class PlatformConnectorResolver {
  constructor(protected readonly service: PlatformConnectorService) {}
}
