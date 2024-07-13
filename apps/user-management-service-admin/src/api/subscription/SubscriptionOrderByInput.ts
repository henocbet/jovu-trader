import { SortOrder } from "../../util/SortOrder";

export type SubscriptionOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  planName?: SortOrder;
  startDate?: SortOrder;
  endDate?: SortOrder;
  status?: SortOrder;
};
