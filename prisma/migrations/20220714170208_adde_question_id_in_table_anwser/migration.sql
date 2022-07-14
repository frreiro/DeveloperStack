/*
  Warnings:

  - Added the required column `questionId` to the `Anwser` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Anwser" ADD COLUMN     "questionId" INTEGER NOT NULL;
