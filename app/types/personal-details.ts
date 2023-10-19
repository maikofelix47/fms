export interface PersonalDetails {
  id: number;
  memberId: number;
  firstName: string;
  lastName: string;
  nationalIdNo: number;
  nationality: string;
  dob: Date;
  gender: string;
  maritalStatus: string;
}

export type PersonalDetailsDto = Omit<PersonalDetails, "id">;
