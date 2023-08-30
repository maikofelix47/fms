-- CreateTable
CREATE TABLE "MemberContactDetail" (
    "id" SERIAL NOT NULL,
    "memberId" INTEGER NOT NULL,
    "phoneNo" TEXT NOT NULL,
    "countryOfResidence" TEXT NOT NULL,
    "countyOfResidence" TEXT NOT NULL,
    "estate" TEXT NOT NULL,
    "houseNo" TEXT NOT NULL,
    "voided" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MemberContactDetail_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "MemberContactDetail" ADD CONSTRAINT "MemberContactDetail_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "Member"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
