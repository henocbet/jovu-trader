import * as graphql from "@nestjs/graphql";
import { TradeLogResolverBase } from "./base/tradeLog.resolver.base";
import { TradeLog } from "./base/TradeLog";
import { TradeLogService } from "./tradeLog.service";

@graphql.Resolver(() => TradeLog)
export class TradeLogResolver extends TradeLogResolverBase {
  constructor(protected readonly service: TradeLogService) {
    super(service);
  }
}
