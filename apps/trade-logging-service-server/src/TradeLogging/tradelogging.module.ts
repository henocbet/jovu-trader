import { Module } from "@nestjs/common";
import { TradeLoggingService } from "./tradelogging.service";
import { TradeLoggingController } from "./tradelogging.controller";
import { TradeLoggingResolver } from "./tradelogging.resolver";

@Module({
  controllers: [TradeLoggingController],
  providers: [TradeLoggingService, TradeLoggingResolver],
  exports: [TradeLoggingService],
})
export class TradeLoggingModule {}
