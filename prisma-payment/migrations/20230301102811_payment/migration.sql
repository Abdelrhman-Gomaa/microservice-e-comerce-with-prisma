-- CreateEnum
CREATE TYPE "PaymentMethod" AS ENUM ('USER_WALLET', 'STRIPE_CREDIT_CARD');

-- CreateEnum
CREATE TYPE "paymentStatus" AS ENUM ('SUCCEEDED', 'FAILED', 'PENDED', 'REFUNDED');

-- CreateTable
CREATE TABLE "StripeWebhook" (
    "id" TEXT NOT NULL,
    "webhookIdOnStripe" TEXT,
    "secret" TEXT,
    "url" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "StripeWebhook_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StripeCustomer" (
    "id" TEXT NOT NULL,
    "stripeCustomerId" TEXT,
    "userId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "StripeCustomer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Transaction" (
    "id" TEXT NOT NULL,
    "gatewayOrderId" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "userId" TEXT NOT NULL,
    "paymentMethod" "PaymentMethod",
    "paymentStatus" "paymentStatus",
    "failureReason" TEXT,
    "cardDetails" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);
