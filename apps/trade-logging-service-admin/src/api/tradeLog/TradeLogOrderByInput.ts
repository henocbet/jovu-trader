import { SortOrder } from "../../util/SortOrder";

export type TradeLogOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  logDetails?: SortOrder;
  timestamp?: SortOrder;
};
