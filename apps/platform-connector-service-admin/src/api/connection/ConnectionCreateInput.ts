import { InputJsonValue } from "../../types";

export type ConnectionCreateInput = {
  connectionName?: string | null;
  details?: InputJsonValue;
  status?: "Option1" | null;
};
