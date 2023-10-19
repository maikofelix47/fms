import prisma from "@/app/lib/prisma";

export function createNewMembership(userId: number) {
  return prisma.member.create({
    data: {
      isActive: true,
      joinDate: new Date(),
      userId: userId,
      voided: false,
    },
  });
}

export function getApprovedMembers() {
  return prisma.member.findMany({
    select: {
      id: true,
      MemberPersonalDetail: {
        select: {
          firstName: true,
          lastName: true,
          nationality: true,
        },
      },
      createdAt: true,
    },
  });
}

export function getApprovedMember(id: number) {
  return prisma.member.findFirstOrThrow({
    where: {
      id: id,
    },
    select: {
      id: true,
      MemberPersonalDetail: {
        select: {
          firstName: true,
          lastName: true,
          nationality: true,
        },
      },
      createdAt: true,
    },
  });
}
