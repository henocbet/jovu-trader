import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type TradeLogWhereInput = {
  id?: StringFilter;
  logDetails?: JsonFilter;
  timestamp?: DateTimeNullableFilter;
};
