export interface ContactDetails {
  id: number;
  memberId: number;
  phoneNo: string;
  countryOfResidence: string;
  countyOfResidence: string;
  estate: string;
  houseNo: string;
}

export type ContactDetailsDto = Omit<ContactDetails, "id">;
