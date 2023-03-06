-- CreateEnum
CREATE TYPE "GatewayPaymentMethodEnum" AS ENUM ('CREDIT_CARD', 'APPLE_PAY', 'MADA');

-- CreateEnum
CREATE TYPE "RegistrationStatusEnum" AS ENUM ('SUCCEEDED', 'FAILED', 'PENDED');

-- CreateTable
CREATE TABLE "UserStoredPaymentMethod" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "registrationId" TEXT,
    "gatewayOrderId" TEXT NOT NULL,
    "registrationStatus" "RegistrationStatusEnum" NOT NULL,
    "cardInfo" JSONB,
    "bankInfo" JSONB,
    "paymentMethod" "GatewayPaymentMethodEnum" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "UserStoredPaymentMethod_pkey" PRIMARY KEY ("id")
);
