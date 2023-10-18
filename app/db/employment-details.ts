import prisma from "@/app/lib/prisma";
import { EmploymentDetails } from "@/app/types/employment-details";

export function createEmploymentDetails(employmentDetails: EmploymentDetails) {
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
