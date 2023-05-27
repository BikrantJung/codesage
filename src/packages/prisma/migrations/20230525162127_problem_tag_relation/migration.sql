-- CreateTable
CREATE TABLE "_TagToUserProblem" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_TagToUserProblem_AB_unique" ON "_TagToUserProblem"("A", "B");

-- CreateIndex
CREATE INDEX "_TagToUserProblem_B_index" ON "_TagToUserProblem"("B");

-- AddForeignKey
ALTER TABLE "_TagToUserProblem" ADD CONSTRAINT "_TagToUserProblem_A_fkey" FOREIGN KEY ("A") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TagToUserProblem" ADD CONSTRAINT "_TagToUserProblem_B_fkey" FOREIGN KEY ("B") REFERENCES "UserProblem"("id") ON DELETE CASCADE ON UPDATE CASCADE;
