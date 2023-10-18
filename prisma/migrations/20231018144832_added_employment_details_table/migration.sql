-- CreateTable
CREATE TABLE "MemberEmploymentDetail" (
    "id" SERIAL NOT NULL,
    "employer" TEXT NOT NULL,
    "dateOfEmployment" TIMESTAMP(3) NOT NULL,
    "station" TEXT NOT NULL,
    "jobTitle" TEXT NOT NULL,
    "grossMonthlyIncome" INTEGER NOT NULL,
    "voided" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MemberEmploymentDetail_pkey" PRIMARY KEY ("id")
);
