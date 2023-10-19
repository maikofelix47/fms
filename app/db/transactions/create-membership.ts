import prisma from "@/app/lib/prisma";

import { ContactDetails, ContactDetailsDto } from "@/app/types/contact-details";
import { EmploymentDetailsDto } from "@/app/types/employment-details";
import { PersonalDetailsDto } from "@/app/types/personal-details";
import { MemberApplication } from "@/app/types/member-application";

export async function createMembershipTransaction(
  membershipReq: MemberApplication
) {
  return prisma.$transaction(async (tx) => {
    // approve membership request
    await tx.membershipApplication.update({
      where: {
        id: membershipReq.id,
      },
      data: {
        status: 1,
      },
    });

    // create member record
    const memberData = await tx.member.create({
      data: {
        isActive: true,
        joinDate: new Date(),
        userId: membershipReq.userId,
        voided: false,
      },
    });

    const contactDetails = getContactDetailsPayload(
      memberData.id,
      membershipReq
    );
    // add contact details
    await tx.memberContactDetail.create({
      data: {
        memberId: contactDetails.memberId,
        phoneNo: contactDetails.phoneNo,
        countryOfResidence: contactDetails.countryOfResidence,
        countyOfResidence: contactDetails.countyOfResidence,
        estate: contactDetails.houseNo,
        houseNo: contactDetails.houseNo,
      },
    });

    // add employment details
    const employmentDetails = getEmploymentDetailsPayload(
      memberData.id,
      membershipReq
    );
    await tx.memberEmploymentDetail.create({
      data: {
        memberId: employmentDetails.memberId,
        employer: employmentDetails.employer,
        jobTitle: employmentDetails.jobTitle,
        dateOfEmployment: employmentDetails.dateOfEmployment,
        station: employmentDetails.station,
        grossMonthlyIncome: employmentDetails.grossMonthlyIncome,
      },
    });

    // add personal details

    const personalDetails = getPersonalDetailsPayload(
      memberData.id,
      membershipReq
    );
    await tx.memberPersonalDetail.create({
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
  });
}

function getContactDetailsPayload(
  memberId: number,
  membershipReq: Omit<ContactDetails, "id" | "memberId">
) {
  const contactPayload: ContactDetailsDto = {
    memberId: memberId,
    phoneNo: membershipReq.phoneNo,
    countryOfResidence: membershipReq.countryOfResidence,
    countyOfResidence: membershipReq.countyOfResidence,
    estate: membershipReq.estate,
    houseNo: membershipReq.houseNo,
  };
  return contactPayload;
}

function getEmploymentDetailsPayload(
  memberId: number,
  membershipReq: Omit<EmploymentDetailsDto, "memberId">
) {
  const employmentDetailsPayload: EmploymentDetailsDto = {
    memberId: memberId,
    employer: membershipReq.employer,
    dateOfEmployment: membershipReq.dateOfEmployment,
    station: membershipReq.station,
    jobTitle: membershipReq.jobTitle,
    grossMonthlyIncome: membershipReq.grossMonthlyIncome,
  };
  return employmentDetailsPayload;
}

function getPersonalDetailsPayload(
  memberId: number,
  membershipReq: Omit<PersonalDetailsDto, "memberId">
) {
  const personalDetailsPayload: PersonalDetailsDto = {
    memberId: memberId,
    firstName: membershipReq.firstName,
    lastName: membershipReq.lastName,
    nationalIdNo: membershipReq.nationalIdNo,
    nationality: membershipReq.nationality,
    dob: membershipReq.dob,
    gender: membershipReq.gender,
    maritalStatus: membershipReq.maritalStatus,
  };
  return personalDetailsPayload;
}
