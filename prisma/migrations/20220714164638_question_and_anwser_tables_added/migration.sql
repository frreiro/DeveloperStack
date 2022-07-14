-- CreateTable
CREATE TABLE "Questions" (
    "id" SERIAL NOT NULL,
    "question" TEXT NOT NULL,

    CONSTRAINT "Questions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Anwser" (
    "id" SERIAL NOT NULL,
    "anwser" TEXT NOT NULL,

    CONSTRAINT "Anwser_pkey" PRIMARY KEY ("id")
);
