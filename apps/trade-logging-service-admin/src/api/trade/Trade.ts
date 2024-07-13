import { JsonValue } from "type-fest";

export type Trade = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  tradeId: string | null;
  tradeDetails: JsonValue;
  status?: "Option1" | null;
};
