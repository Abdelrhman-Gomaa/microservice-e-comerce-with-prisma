/*
  Warnings:

  - You are about to drop the column `cardDetails` on the `Transaction` table. All the data in the column will be lost.
  - You are about to drop the column `gatewayOrderId` on the `Transaction` table. All the data in the column will be lost.
  - Added the required column `cartId` to the `Transaction` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Transaction" DROP COLUMN "cardDetails",
DROP COLUMN "gatewayOrderId",
ADD COLUMN     "cartId" TEXT NOT NULL;
