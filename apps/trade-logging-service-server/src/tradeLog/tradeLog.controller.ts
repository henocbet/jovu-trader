import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TradeLogService } from "./tradeLog.service";
import { TradeLogControllerBase } from "./base/tradeLog.controller.base";

@swagger.ApiTags("tradeLogs")
@common.Controller("tradeLogs")
export class TradeLogController extends TradeLogControllerBase {
  constructor(protected readonly service: TradeLogService) {
    super(service);
  }
}
