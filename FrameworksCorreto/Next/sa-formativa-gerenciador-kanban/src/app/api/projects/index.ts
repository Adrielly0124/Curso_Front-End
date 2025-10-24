import { NextRequest, NextResponse } from "next/server";
import Projeto from "@/models/Project";
import { verifyToken } from "@/middleware/auth";

export async function POST(req: NextRequest) {
  const auth = verifyToken(req, ["gerente"]);
  if (auth instanceof NextResponse) return auth;

  const data = await req.json();
  const projeto = await Projeto.create(data);
  return NextResponse.json(projeto, { status: 201 });
}

export async function GET() {
  const projetos = await Projeto.find();
  return NextResponse.json(projetos);
}
