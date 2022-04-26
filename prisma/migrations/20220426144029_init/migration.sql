-- CreateTable
CREATE TABLE "student" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "note" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "student_pkey" PRIMARY KEY ("id")
);
