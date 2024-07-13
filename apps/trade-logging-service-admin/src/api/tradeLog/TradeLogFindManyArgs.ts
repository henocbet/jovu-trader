import { TradeLogWhereInput } from "./TradeLogWhereInput";
import { TradeLogOrderByInput } from "./TradeLogOrderByInput";

export type TradeLogFindManyArgs = {
  where?: TradeLogWhereInput;
  orderBy?: Array<TradeLogOrderByInput>;
  skip?: number;
  take?: number;
};
