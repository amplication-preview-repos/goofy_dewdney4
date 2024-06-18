import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ClaimWhereInput = {
  claimAmount?: FloatNullableFilter;
  claimDate?: DateTimeNullableFilter;
  claimNumber?: StringNullableFilter;
  id?: StringFilter;
  status?: "Option1";
};
