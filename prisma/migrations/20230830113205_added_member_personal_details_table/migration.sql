-- CreateTable
CREATE TABLE "MemberPersonalDetail" (
    "id" SERIAL NOT NULL,
    "memberId" INTEGER NOT NULL,
    "firstName" VARCHAR(15) NOT NULL,
    "lastName" VARCHAR(15) NOT NULL,
    "nationalIdNo" INTEGER NOT NULL,
    "nationality" TEXT NOT NULL,
    "dob" TIMESTAMP(3) NOT NULL,
    "gender" VARCHAR(1) NOT NULL,
    "maritalStatus" TEXT NOT NULL,

    CONSTRAINT "MemberPersonalDetail_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "MemberPersonalDetail" ADD CONSTRAINT "MemberPersonalDetail_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "Member"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
