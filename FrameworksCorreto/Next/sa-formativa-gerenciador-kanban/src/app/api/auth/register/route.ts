import { NextRequest, NextResponse } from "next/server";
import { registerUser } from "@/controllers/authController";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const resUser = await registerUser({ body }, { status: (code: number) => ({ json: (data: any) => data }) });
  return NextResponse.json(resUser);
}
