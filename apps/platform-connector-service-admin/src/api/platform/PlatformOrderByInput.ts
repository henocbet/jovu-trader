import { SortOrder } from "../../util/SortOrder";

export type PlatformOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  platformName?: SortOrder;
  apiUrl?: SortOrder;
  apiKey?: SortOrder;
};
