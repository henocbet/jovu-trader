import { InputJsonValue } from "../../types";

export type ConnectionUpdateInput = {
  connectionName?: string | null;
  details?: InputJsonValue;
  status?: "Option1" | null;
};
