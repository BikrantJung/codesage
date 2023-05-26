-- CreateTable
CREATE TABLE "UserJourney" (
    "id" TEXT NOT NULL,
    "j_title" TEXT NOT NULL,
    "j_description" TEXT,
    "j_solution" TEXT,
    "j_likes" INTEGER NOT NULL,
    "j_comments" TEXT NOT NULL,

    CONSTRAINT "UserJourney_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" TEXT NOT NULL,
    "tag_title" TEXT NOT NULL,
    "tag_views" INTEGER NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comment" (
    "id" TEXT NOT NULL,
    "comment_body" TEXT NOT NULL,
    "comment_parentId" TEXT,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Tag_tag_title_key" ON "Tag"("tag_title");

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_comment_parentId_fkey" FOREIGN KEY ("comment_parentId") REFERENCES "Comment"("id") ON DELETE SET NULL ON UPDATE CASCADE;
