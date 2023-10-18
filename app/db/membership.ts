import prisma from "@/app/lib/prisma";
import { Member } from "../types/member";

export function createNewMembership(newMemberPayload: Member) {
  return prisma.member.create({
    data: {
      isActive: true,
      joinDate: new Date(),
      userId: newMemberPayload.userId,
      voided: false,
    },
  });
}
