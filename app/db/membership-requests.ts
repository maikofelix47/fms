import prisma from "@/app/lib/prisma";

export function createMembershipRequest(body: any) {
  return prisma.membershipApplication.create({
    data: {
      status: 0,
      firstName: body.firstName,
      lastName: body.lastName,
      nationalIdNo: parseInt(body.nationalIdNo),
      nationality: body.nationality,
      dob: new Date(body.dob),
      gender: body.gender,
      maritalStatus: body.maritalStatus,
      phoneNo: body.phoneNo,
      countryOfResidence: body.countryOfResidence,
      countyOfResidence: body.countyOfResidence,
      estate: body.estate,
      houseNo: body.houseNo,
      employed: body.employmentStatus === "employed",
      selfEmployer: body.employmentStatus === "self-employed",
      employer: body.employer,
      dateOfEmployment: new Date(body.dateOfEmployment),
      station: body.station,
      jobTitle: body.jobTitle,
      grossMonthlyIncome: parseInt(body.grossMonthlyIncome),
      userId: 1, //placeholder value
    },
  });
}

export function getMembershipRequesById(id: number) {
  return prisma.membershipApplication.findFirstOrThrow({
    where: {
      id: id,
    },
  });
}

export function approveMembershipRequest(requestId: number) {
  return prisma.membershipApplication.update({
    where: {
      id: requestId,
    },
    data: {
      status: 1,
    },
  });
}

export function rejectMembershipRequest(requestId: number) {
  return prisma.membershipApplication.update({
    where: {
      id: requestId,
    },
    data: {
      status: 2,
    },
  });
}

export function getAllMembershipRequests() {
  return prisma.membershipApplication.findMany({
    select: {
      id: true,
      firstName: true,
      lastName: true,
      nationality: true,
      createdAt: true,
      status: true,
    },
    where: {
      status: 0,
    },
  });
}
