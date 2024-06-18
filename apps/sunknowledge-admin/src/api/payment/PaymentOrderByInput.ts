import { SortOrder } from "../../util/SortOrder";

export type PaymentOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  paymentAmount?: SortOrder;
  paymentDate?: SortOrder;
  paymentMethod?: SortOrder;
  updatedAt?: SortOrder;
};
