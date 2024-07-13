/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { TradeLog } from "./TradeLog";
import { TradeLogCountArgs } from "./TradeLogCountArgs";
import { TradeLogFindManyArgs } from "./TradeLogFindManyArgs";
import { TradeLogFindUniqueArgs } from "./TradeLogFindUniqueArgs";
import { CreateTradeLogArgs } from "./CreateTradeLogArgs";
import { UpdateTradeLogArgs } from "./UpdateTradeLogArgs";
import { DeleteTradeLogArgs } from "./DeleteTradeLogArgs";
import { TradeLogService } from "../tradeLog.service";
@graphql.Resolver(() => TradeLog)
export class TradeLogResolverBase {
  constructor(protected readonly service: TradeLogService) {}

  async _tradeLogsMeta(
    @graphql.Args() args: TradeLogCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [TradeLog])
  async tradeLogs(
    @graphql.Args() args: TradeLogFindManyArgs
  ): Promise<TradeLog[]> {
    return this.service.tradeLogs(args);
  }

  @graphql.Query(() => TradeLog, { nullable: true })
  async tradeLog(
    @graphql.Args() args: TradeLogFindUniqueArgs
  ): Promise<TradeLog | null> {
    const result = await this.service.tradeLog(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => TradeLog)
  async createTradeLog(
    @graphql.Args() args: CreateTradeLogArgs
  ): Promise<TradeLog> {
    return await this.service.createTradeLog({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => TradeLog)
  async updateTradeLog(
    @graphql.Args() args: UpdateTradeLogArgs
  ): Promise<TradeLog | null> {
    try {
      return await this.service.updateTradeLog({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => TradeLog)
  async deleteTradeLog(
    @graphql.Args() args: DeleteTradeLogArgs
  ): Promise<TradeLog | null> {
    try {
      return await this.service.deleteTradeLog(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
