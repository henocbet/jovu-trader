import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { PlatformConnectorService } from "./platformconnector.service";

@swagger.ApiTags("platformConnectors")
@common.Controller("platformConnectors")
export class PlatformConnectorController {
  constructor(protected readonly service: PlatformConnectorService) {}
}
