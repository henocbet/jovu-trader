import { InputJsonValue } from "../../types";

export type TradeCreateInput = {
  tradeId?: string | null;
  tradeDetails?: InputJsonValue;
  status?: "Option1" | null;
};
