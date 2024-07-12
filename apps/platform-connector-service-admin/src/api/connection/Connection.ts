import { JsonValue } from "type-fest";

export type Connection = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  connectionName: string | null;
  details: JsonValue;
  status?: "Option1" | null;
};
