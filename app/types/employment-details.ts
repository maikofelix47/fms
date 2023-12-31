export interface EmploymentDetails {
  id: number;
  memberId: number;
  employer: string;
  dateOfEmployment: Date;
  station: string;
  jobTitle: string;
  grossMonthlyIncome: number;
}

export type EmploymentDetailsDto = Omit<EmploymentDetails, "id">;
