import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type PatientWhereInput = {
  address?: StringNullableFilter;
  contactNumber?: StringNullableFilter;
  dateOfBirth?: DateTimeNullableFilter;
  firstName?: StringNullableFilter;
  gender?: "Option1";
  id?: StringFilter;
  lastName?: StringNullableFilter;
};
