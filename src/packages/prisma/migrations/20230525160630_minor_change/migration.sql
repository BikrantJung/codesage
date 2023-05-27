/*
  Warnings:

  - You are about to drop the column `userJourneyId` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `jComments` on the `UserProblem` table. All the data in the column will be lost.
  - You are about to drop the column `jDescription` on the `UserProblem` table. All the data in the column will be lost.
  - You are about to drop the column `jLikes` on the `UserProblem` table. All the data in the column will be lost.
  - You are about to drop the column `jSolution` on the `UserProblem` table. All the data in the column will be lost.
  - You are about to drop the column `jTitle` on the `UserProblem` table. All the data in the column will be lost.
  - Added the required column `userProblemId` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `problemLikes` to the `UserProblem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `problemTitle` to the `UserProblem` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_userJourneyId_fkey";

-- AlterTable
ALTER TABLE "Comment" DROP COLUMN "userJourneyId",
ADD COLUMN     "userProblemId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "UserProblem" DROP COLUMN "jComments",
DROP COLUMN "jDescription",
DROP COLUMN "jLikes",
DROP COLUMN "jSolution",
DROP COLUMN "jTitle",
ADD COLUMN     "problemDescription" TEXT,
ADD COLUMN     "problemLikes" INTEGER NOT NULL,
ADD COLUMN     "problemTitle" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_userProblemId_fkey" FOREIGN KEY ("userProblemId") REFERENCES "UserProblem"("id") ON DELETE CASCADE ON UPDATE CASCADE;
