import { SortOrder } from "../../util/SortOrder";

export type InsuranceOrderByInput = {
  coverageAmount?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  insuranceProvider?: SortOrder;
  policyNumber?: SortOrder;
  updatedAt?: SortOrder;
};
