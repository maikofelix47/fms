import prisma from "@/app/lib/prisma";
import { ContactDetailsDto } from "@/app/types/contact-details";

export function createContactDetails(contactDetails: ContactDetailsDto) {
  return prisma.memberContactDetail.create({
    data: {
      memberId: contactDetails.memberId,
      phoneNo: contactDetails.phoneNo,
      countryOfResidence: contactDetails.countryOfResidence,
      countyOfResidence: contactDetails.countyOfResidence,
      estate: contactDetails.houseNo,
      houseNo: contactDetails.houseNo,
    },
  });
}
