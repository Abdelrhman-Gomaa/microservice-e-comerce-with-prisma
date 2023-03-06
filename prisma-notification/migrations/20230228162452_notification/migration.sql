-- CreateEnum
CREATE TYPE "NotificationTypeEnum" AS ENUM ('PUBLIC', 'NEW_CONTACT_MESSAGE');

-- CreateTable
CREATE TABLE "notification" (
    "id" TEXT NOT NULL,
    "receivers" TEXT[],
    "senderId" TEXT NOT NULL,
    "type" "NotificationTypeEnum",
    "thumbnail" TEXT,
    "title" TEXT,
    "body" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "notification_pkey" PRIMARY KEY ("id")
);
