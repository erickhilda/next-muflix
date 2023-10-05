import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!body.username || !body.password) {
      throw "username and password required";
    }

    return NextResponse.json({
      status: "ok",
      username: body.username,
    });
  } catch (error) {
    const data = {
      error: error,
    };
    return NextResponse.json(data);
  }
}
