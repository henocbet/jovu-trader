import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { TradeLoggingService } from "./tradelogging.service";

@swagger.ApiTags("tradeLoggings")
@common.Controller("tradeLoggings")
export class TradeLoggingController {
  constructor(protected readonly service: TradeLoggingService) {}
}
