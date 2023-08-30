-- CreateTable
CREATE TABLE "MembershipApplication" (
    "id" SERIAL NOT NULL,
    "status" SMALLINT NOT NULL,
    "firstName" VARCHAR(15) NOT NULL,
    "lastName" VARCHAR(15) NOT NULL,
    "nationalIdNo" INTEGER NOT NULL,
    "nationality" TEXT NOT NULL,
    "dob" TIMESTAMP(3) NOT NULL,
    "gender" VARCHAR(1) NOT NULL,
    "maritalStatus" TEXT NOT NULL,
    "phoneNo" TEXT NOT NULL,
    "countryOfResidence" TEXT NOT NULL,
    "countyOfResidence" TEXT NOT NULL,
    "estate" TEXT NOT NULL,
    "houseNo" TEXT NOT NULL,
    "employed" BOOLEAN NOT NULL,
    "selfEmployer" BOOLEAN NOT NULL,
    "employer" TEXT NOT NULL,
    "dateOfEmployment" TIMESTAMP(3) NOT NULL,
    "station" TEXT NOT NULL,
    "jobTitle" TEXT NOT NULL,
    "grossMonthlyIncome" INTEGER NOT NULL,
    "voided" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MembershipApplication_pkey" PRIMARY KEY ("id")
);
