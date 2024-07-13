import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type TradeWhereInput = {
  id?: StringFilter;
  tradeId?: StringNullableFilter;
  tradeDetails?: JsonFilter;
  status?: "Option1";
};
