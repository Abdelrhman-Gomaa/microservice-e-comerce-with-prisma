-- AlterTable
ALTER TABLE "UserStoredPaymentMethod" ALTER COLUMN "registrationStatus" DROP NOT NULL,
ALTER COLUMN "paymentMethod" DROP NOT NULL;
