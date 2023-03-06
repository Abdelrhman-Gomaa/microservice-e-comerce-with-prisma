/*
  Warnings:

  - You are about to drop the column `Construction` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `colour` on the `Product` table. All the data in the column will be lost.
  - Made the column `title` on table `Product` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "Construction",
DROP COLUMN "colour",
ADD COLUMN     "color" TEXT,
ADD COLUMN     "construction" JSONB,
ALTER COLUMN "title" SET NOT NULL,
ALTER COLUMN "Description" DROP NOT NULL,
ALTER COLUMN "instructions" DROP NOT NULL;
