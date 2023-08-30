-- CreateTable
CREATE TABLE "Deposit" (
    "id" SERIAL NOT NULL,
    "memberId" INTEGER NOT NULL,
    "amount" MONEY NOT NULL,
    "datePaid" TIMESTAMP(3) NOT NULL,
    "voided" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Deposit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Share" (
    "id" SERIAL NOT NULL,
    "memberId" INTEGER NOT NULL,
    "amount" MONEY NOT NULL,
    "datePaid" TIMESTAMP(3) NOT NULL,
    "voided" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Share_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Deposit" ADD CONSTRAINT "Deposit_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "Member"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Share" ADD CONSTRAINT "Share_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "Member"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
