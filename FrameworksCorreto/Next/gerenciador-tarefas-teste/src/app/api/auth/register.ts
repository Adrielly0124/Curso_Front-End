import { NextResponse } from "next/server";
import { UsuariosController } from "../../../controllers/UsuarioController";

export async function POST(req: Request) {
  try {
    const dados = await req.json();
    const usuario = await UsuariosController.registrar(dados);
    return NextResponse.json(usuario);
  } catch (error: any) {
    return NextResponse.json({ erro: error.message }, { status: 400 });
  }
}
