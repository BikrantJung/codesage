import { db } from "@/lib/db";
import { getLoggedInUser } from "@/lib/session";
import { IGetAllProblems, IPostProblem } from "@/types/shared/post-problem";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  const user = await getLoggedInUser();
  if (!user) {
    return NextResponse.json({
      statusCode: 404,
      message: "Unauthenticated",
      ok: false,
    });
  }
  try {
    const data: IPostProblem = await req.json();
    if (!data) {
      return NextResponse.json({
        statusCode: 400,
        message: "Bad request. No data provided",
        ok: false,
      });
    }

    const result = await db.userProblem.create({
      data: {
        problemTitle: data.problemTitle,
        problemLikes: 0,
        problemOwnerId: user.id,
        problemDescription: data.problemDescription,
        problemTags: {
          connectOrCreate: data.problemTags.map((tag) => ({
            where: { tagTitle: tag.tagTitle },
            create: { tagTitle: tag.tagTitle, tagViews: tag.tagViews },
          })),
        },
      },
      include: {
        problemTags: true,
      },
    });
    return NextResponse.json(
      { message: "Created Successfully", data: result, ok: true },
      {
        status: 201,
        statusText: "Created",
      }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: error, ok: false },
      {
        status: 400,
        statusText: "Bad request",
      }
    );
  }
}

export async function GET(req : NextRequest) {

  const url = new URL(req.url)

  const skip = url.searchParams.get("skip")
  const take = url.searchParams.get("take")



  try {
    const problems = await db.userProblem.findMany({
      skip: skip ? Number(skip) : undefined,
      take: take ? Number(take) : undefined
    });
    return NextResponse.json(
      { message: "Success", data: problems, ok: true },
      { status: 200, statusText: "OK" }
    );
  } catch (error) {
    console.log(error);
    console.log("SER VER ERR OR");
  }
}
