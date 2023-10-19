export interface MemberApplication {
  id: number;
  userId: number;
  firstName: string;
  lastName: string;
  nationalIdNo: number;
  nationality: string;
  dob: Date;
  gender: string;
  maritalStatus: string;
  phoneNo: string;
  countryOfResidence: string;
  countyOfResidence: string;
  estate: string;
  houseNo: string;
  employed: boolean;
  selfEmployer: boolean;
  employer: string;
  dateOfEmployment: Date;
  station: string;
  jobTitle: string;
  grossMonthlyIncome: number;
}
