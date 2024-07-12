import { Connection as TConnection } from "../api/connection/Connection";

export const CONNECTION_TITLE_FIELD = "connectionName";

export const ConnectionTitle = (record: TConnection): string => {
  return record.connectionName?.toString() || String(record.id);
};
