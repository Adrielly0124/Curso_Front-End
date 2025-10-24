import { NextRequest, NextResponse } from "next/server";
import { loginUser } from "@/controllers/authController";

export async function POST(req: NextRequest) {
  const body = await req.json();
  return loginUser({ body }, {
    status: (code: number) => ({ json: (data: any) => NextResponse.json(data, { status: code }) })
  });
}
