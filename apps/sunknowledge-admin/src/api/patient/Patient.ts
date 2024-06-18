export type Patient = {
  address: string | null;
  contactNumber: string | null;
  createdAt: Date;
  dateOfBirth: Date | null;
  firstName: string | null;
  gender?: "Option1" | null;
  id: string;
  lastName: string | null;
  updatedAt: Date;
};
