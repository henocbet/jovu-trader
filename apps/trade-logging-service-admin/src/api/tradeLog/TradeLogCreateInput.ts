import { InputJsonValue } from "../../types";

export type TradeLogCreateInput = {
  logDetails?: InputJsonValue;
  timestamp?: Date | null;
};
