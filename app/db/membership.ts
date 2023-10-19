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
