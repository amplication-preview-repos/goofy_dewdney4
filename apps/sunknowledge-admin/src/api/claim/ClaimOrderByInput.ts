import { SortOrder } from "../../util/SortOrder";

export type ClaimOrderByInput = {
  claimAmount?: SortOrder;
  claimDate?: SortOrder;
  claimNumber?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
