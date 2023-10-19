import prisma from "@/app/lib/prisma";
import { PersonalDetailsDto } from "@/app/types/personal-details";

export function createPersonalDetails(personalDetails: PersonalDetailsDto) {
  return prisma.memberPersonalDetail.create({
    data: {
      memberId: personalDetails.memberId,
      firstName: personalDetails.firstName,
      lastName: personalDetails.lastName,
      nationalIdNo: personalDetails.nationalIdNo,
      nationality: personalDetails.nationality,
      dob: personalDetails.dob,
      gender: personalDetails.gender,
      maritalStatus: personalDetails.maritalStatus,
    },
  });
}
