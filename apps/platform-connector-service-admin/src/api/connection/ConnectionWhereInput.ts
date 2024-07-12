import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type ConnectionWhereInput = {
  id?: StringFilter;
  connectionName?: StringNullableFilter;
  details?: JsonFilter;
  status?: "Option1";
};
