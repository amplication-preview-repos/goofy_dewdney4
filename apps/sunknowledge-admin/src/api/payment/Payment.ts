export type Payment = {
  createdAt: Date;
  id: string;
  paymentAmount: number | null;
  paymentDate: Date | null;
  paymentMethod?: "Option1" | null;
  updatedAt: Date;
};
