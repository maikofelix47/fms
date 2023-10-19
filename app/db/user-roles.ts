import prisma from "@/app/lib/prisma";
export function getUserRoles(userId: number) {
  return prisma.user.findFirstOrThrow({
    where: {
      id: userId,
    },
    select: {
      email: true,
      UserRole: {
        select: {
          role: {
            select: {
              name: true,
              RolePrivilege: {
                select: {
                  privilege: {
                    select: {
                      name: true,
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  });
}
