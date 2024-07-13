import { InputJsonValue } from "../../types";

export type TradeUpdateInput = {
  tradeId?: string | null;
  tradeDetails?: InputJsonValue;
  status?: "Option1" | null;
};
