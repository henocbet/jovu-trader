import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PlatformWhereInput = {
  id?: StringFilter;
  platformName?: StringNullableFilter;
  apiUrl?: StringNullableFilter;
  apiKey?: StringNullableFilter;
};
