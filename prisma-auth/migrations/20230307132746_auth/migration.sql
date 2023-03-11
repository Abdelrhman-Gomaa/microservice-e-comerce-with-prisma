-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- CreateEnum
CREATE TYPE "Device" AS ENUM ('DESKTOP', 'IOS', 'ANDROID');

-- CreateEnum
CREATE TYPE "maritalStatus" AS ENUM ('SINGLE', 'MARRIED', 'WIDOWED', 'DIVORCED');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "fullName" TEXT,
    "slug" TEXT,
    "email" TEXT,
    "notVerifiedPhone" TEXT,
    "verifiedPhone" TEXT,
    "password" TEXT NOT NULL,
    "gender" "Gender" NOT NULL DEFAULT 'MALE',
    "maritalStatus" "maritalStatus" NOT NULL DEFAULT 'SINGLE',
    "role" "Role" NOT NULL DEFAULT 'USER',
    "birthDate" TIMESTAMP(3),
    "country" TEXT,
    "address" TEXT,
    "location" TEXT,
    "profilePicture" TEXT,
    "isBlocked" BOOLEAN NOT NULL DEFAULT false,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "favLang" TEXT NOT NULL DEFAULT 'EN',
    "securityGroup" TEXT,
    "securityGroupId" TEXT,
    "device" "Device",
    "userVerificationCodes" TEXT,
    "spokenLanguages" TEXT,
    "token" TEXT,
    "fcmTokens" JSONB,
    "cartId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
