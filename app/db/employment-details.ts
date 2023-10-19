import prisma from "@/app/lib/prisma";
import { EmploymentDetailsDto } from "@/app/types/employment-details";

export function createEmploymentDetails(
  employmentDetails: EmploymentDetailsDto
) {
  return prisma.memberEmploymentDetail.create({
    data: {
      memberId: employmentDetails.memberId,
      employer: employmentDetails.employer,
      jobTitle: employmentDetails.jobTitle,
      dateOfEmployment: employmentDetails.dateOfEmployment,
      station: employmentDetails.station,
      grossMonthlyIncome: employmentDetails.grossMonthlyIncome,
    },
  });
}
