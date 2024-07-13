import { InputJsonValue } from "../../types";

export type TradeLogUpdateInput = {
  logDetails?: InputJsonValue;
  timestamp?: Date | null;
};
