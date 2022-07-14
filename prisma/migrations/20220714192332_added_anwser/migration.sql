/*
  Warnings:

  - You are about to drop the column `questionId` on the `anwsers` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "anwsers" DROP COLUMN "questionId",
ADD COLUMN     "questionsId" INTEGER;

-- AddForeignKey
ALTER TABLE "anwsers" ADD CONSTRAINT "anwsers_questionsId_fkey" FOREIGN KEY ("questionsId") REFERENCES "questions"("id") ON DELETE SET NULL ON UPDATE CASCADE;
