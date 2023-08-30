-- CreateTable
CREATE TABLE "InterestType" (
    "id" SERIAL NOT NULL,
    "name" CHAR(20) NOT NULL,
    "description" CHAR(100) NOT NULL,
    "voided" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "InterestType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LoanProduct" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(20) NOT NULL,
    "interestTypeId" INTEGER NOT NULL,
    "minAmount" INTEGER NOT NULL,
    "maxAmount" INTEGER NOT NULL,
    "minTenor" INTEGER NOT NULL,
    "maxTenor" INTEGER NOT NULL,
    "interestRate" DECIMAL(2,2) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LoanProduct_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "LoanProduct" ADD CONSTRAINT "LoanProduct_interestTypeId_fkey" FOREIGN KEY ("interestTypeId") REFERENCES "InterestType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
