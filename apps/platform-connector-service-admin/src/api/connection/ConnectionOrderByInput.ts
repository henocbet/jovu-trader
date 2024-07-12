import { SortOrder } from "../../util/SortOrder";

export type ConnectionOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  connectionName?: SortOrder;
  details?: SortOrder;
  status?: SortOrder;
};
