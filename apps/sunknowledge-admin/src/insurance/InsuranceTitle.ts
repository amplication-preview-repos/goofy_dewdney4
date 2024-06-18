import { Insurance as TInsurance } from "../api/insurance/Insurance";

export const INSURANCE_TITLE_FIELD = "insuranceProvider";

export const InsuranceTitle = (record: TInsurance): string => {
  return record.insuranceProvider?.toString() || String(record.id);
};
