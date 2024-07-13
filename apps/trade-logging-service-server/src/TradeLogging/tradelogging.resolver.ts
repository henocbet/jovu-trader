import * as graphql from "@nestjs/graphql";
import { TradeLoggingService } from "./tradelogging.service";

export class TradeLoggingResolver {
  constructor(protected readonly service: TradeLoggingService) {}
}
