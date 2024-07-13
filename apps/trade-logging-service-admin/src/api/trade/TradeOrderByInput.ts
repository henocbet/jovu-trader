import { SortOrder } from "../../util/SortOrder";

export type TradeOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  tradeId?: SortOrder;
  tradeDetails?: SortOrder;
  status?: SortOrder;
};
