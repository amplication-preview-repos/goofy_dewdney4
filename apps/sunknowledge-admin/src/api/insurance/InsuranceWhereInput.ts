import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type InsuranceWhereInput = {
  coverageAmount?: FloatNullableFilter;
  id?: StringFilter;
  insuranceProvider?: StringNullableFilter;
  policyNumber?: StringNullableFilter;
};
