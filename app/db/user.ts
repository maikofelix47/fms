import prisma from "@/app/lib/prisma";
export function getUserByEmail(email: string) {
  return prisma.user.findFirst({
    where: {
      email: email,
    },
    select: {
      id: true,
      email: true,
      password: true,
    },
  });
}
