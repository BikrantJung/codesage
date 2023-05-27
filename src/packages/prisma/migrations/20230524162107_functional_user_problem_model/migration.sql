/*
  Warnings:

  - You are about to drop the column `comment_body` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `comment_parentId` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `tag_title` on the `Tag` table. All the data in the column will be lost.
  - You are about to drop the column `tag_views` on the `Tag` table. All the data in the column will be lost.
  - You are about to drop the `UserJourney` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[tagTitle]` on the table `Tag` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `commentBody` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userJourneyId` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tagTitle` to the `Tag` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tagViews` to the `Tag` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_comment_parentId_fkey";

-- DropIndex
DROP INDEX "Tag_tag_title_key";

-- AlterTable
ALTER TABLE "Comment" DROP COLUMN "comment_body",
DROP COLUMN "comment_parentId",
ADD COLUMN     "commentBody" TEXT NOT NULL,
ADD COLUMN     "commentParentId" TEXT,
ADD COLUMN     "userJourneyId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Tag" DROP COLUMN "tag_title",
DROP COLUMN "tag_views",
ADD COLUMN     "tagTitle" TEXT NOT NULL,
ADD COLUMN     "tagViews" INTEGER NOT NULL;

-- DropTable
DROP TABLE "UserJourney";

-- CreateTable
CREATE TABLE "UserProblem" (
    "id" TEXT NOT NULL,
    "jTitle" TEXT NOT NULL,
    "jDescription" TEXT,
    "jSolution" TEXT,
    "jLikes" INTEGER NOT NULL,
    "jComments" TEXT NOT NULL,
    "problemOwnerId" TEXT NOT NULL,

    CONSTRAINT "UserProblem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Tag_tagTitle_key" ON "Tag"("tagTitle");

-- AddForeignKey
ALTER TABLE "UserProblem" ADD CONSTRAINT "UserProblem_problemOwnerId_fkey" FOREIGN KEY ("problemOwnerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_userJourneyId_fkey" FOREIGN KEY ("userJourneyId") REFERENCES "UserProblem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_commentParentId_fkey" FOREIGN KEY ("commentParentId") REFERENCES "Comment"("id") ON DELETE SET NULL ON UPDATE CASCADE;
