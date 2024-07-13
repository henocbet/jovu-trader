import { Trade as TTrade } from "../api/trade/Trade";

export const TRADE_TITLE_FIELD = "tradeId";

export const TradeTitle = (record: TTrade): string => {
  return record.tradeId?.toString() || String(record.id);
};
