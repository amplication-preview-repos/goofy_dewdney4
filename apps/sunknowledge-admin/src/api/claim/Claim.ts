export type Claim = {
  claimAmount: number | null;
  claimDate: Date | null;
  claimNumber: string | null;
  createdAt: Date;
  id: string;
  status?: "Option1" | null;
  updatedAt: Date;
};
