/*
  Warnings:

  - You are about to drop the column `User_Id` on the `Todo` table. All the data in the column will be lost.
  - Added the required column `userId` to the `Todo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Todo" DROP COLUMN "User_Id",
ADD COLUMN     "userId" INTEGER NOT NULL,
ALTER COLUMN "Done" SET DEFAULT false;

-- AddForeignKey
ALTER TABLE "Todo" ADD CONSTRAINT "Todo_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;
