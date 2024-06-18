import { InsuranceWhereInput } from "./InsuranceWhereInput";
import { InsuranceOrderByInput } from "./InsuranceOrderByInput";

export type InsuranceFindManyArgs = {
  where?: InsuranceWhereInput;
  orderBy?: Array<InsuranceOrderByInput>;
  skip?: number;
  take?: number;
};
