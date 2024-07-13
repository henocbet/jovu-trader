import { JsonValue } from "type-fest";

export type TradeLog = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  logDetails: JsonValue;
  timestamp: Date | null;
};
