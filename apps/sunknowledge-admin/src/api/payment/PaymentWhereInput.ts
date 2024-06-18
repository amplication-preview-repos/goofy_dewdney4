import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type PaymentWhereInput = {
  id?: StringFilter;
  paymentAmount?: FloatNullableFilter;
  paymentDate?: DateTimeNullableFilter;
  paymentMethod?: "Option1";
};
