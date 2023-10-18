import prisma from "@/app/lib/prisma";
import { ContactDetails } from "@/app/types/contact-details";

export function createContactDetails(contactDetails: ContactDetails) {
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
