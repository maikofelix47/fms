-- AlterTable
ALTER TABLE "DepositPayment" ALTER COLUMN "voidReason" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Loan" ALTER COLUMN "voidReason" DROP NOT NULL;

-- AlterTable
ALTER TABLE "LoanApplication" ALTER COLUMN "voidReason" DROP NOT NULL;

-- AlterTable
ALTER TABLE "LoanPayment" ALTER COLUMN "voidReason" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Payment" ALTER COLUMN "voidReason" DROP NOT NULL;

-- AlterTable
ALTER TABLE "PaymentMethod" ALTER COLUMN "voidReason" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Privilege" ALTER COLUMN "voidReason" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Role" ALTER COLUMN "voidReason" DROP NOT NULL;

-- AlterTable
ALTER TABLE "RolePrivilege" ALTER COLUMN "voidReason" DROP NOT NULL;

-- AlterTable
ALTER TABLE "SharesPayment" ALTER COLUMN "voidReason" DROP NOT NULL;

-- AlterTable
ALTER TABLE "UserRole" ALTER COLUMN "voidReason" DROP NOT NULL;
