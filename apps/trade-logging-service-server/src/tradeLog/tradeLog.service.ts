import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TradeLogServiceBase } from "./base/tradeLog.service.base";

@Injectable()
export class TradeLogService extends TradeLogServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
