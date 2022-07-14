/*
  Warnings:

  - You are about to drop the `Anwser` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Questions` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Anwser";

-- DropTable
DROP TABLE "Questions";

-- CreateTable
CREATE TABLE "questions" (
    "id" SERIAL NOT NULL,
    "question" TEXT NOT NULL,

    CONSTRAINT "questions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "anwsers" (
    "id" SERIAL NOT NULL,
    "questionId" INTEGER NOT NULL,
    "anwser" TEXT NOT NULL,

    CONSTRAINT "anwsers_pkey" PRIMARY KEY ("id")
);
