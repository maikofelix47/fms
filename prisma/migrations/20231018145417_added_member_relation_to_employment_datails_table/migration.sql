/*
  Warnings:

  - Added the required column `memberId` to the `MemberEmploymentDetail` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "MemberEmploymentDetail" ADD COLUMN     "memberId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "MemberEmploymentDetail" ADD CONSTRAINT "MemberEmploymentDetail_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "Member"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
