import { Module } from "@nestjs/common";
import { TradeLogModuleBase } from "./base/tradeLog.module.base";
import { TradeLogService } from "./tradeLog.service";
import { TradeLogController } from "./tradeLog.controller";
import { TradeLogResolver } from "./tradeLog.resolver";

@Module({
  imports: [TradeLogModuleBase],
  controllers: [TradeLogController],
  providers: [TradeLogService, TradeLogResolver],
  exports: [TradeLogService],
})
export class TradeLogModule {}
