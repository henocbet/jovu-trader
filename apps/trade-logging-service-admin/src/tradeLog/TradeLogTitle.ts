import { TradeLog as TTradeLog } from "../api/tradeLog/TradeLog";

export const TRADELOG_TITLE_FIELD = "id";

export const TradeLogTitle = (record: TTradeLog): string => {
  return record.id?.toString() || String(record.id);
};
