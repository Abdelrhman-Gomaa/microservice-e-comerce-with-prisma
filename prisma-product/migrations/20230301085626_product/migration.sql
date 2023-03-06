/*
  Warnings:

  - You are about to drop the column `Description` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "Description",
ADD COLUMN     "description" TEXT;
