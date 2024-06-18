import { Claim as TClaim } from "../api/claim/Claim";

export const CLAIM_TITLE_FIELD = "claimNumber";

export const ClaimTitle = (record: TClaim): string => {
  return record.claimNumber?.toString() || String(record.id);
};
