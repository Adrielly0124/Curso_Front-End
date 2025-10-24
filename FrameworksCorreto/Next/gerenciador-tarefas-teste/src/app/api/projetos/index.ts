import { NextResponse } from 'next/server';
import ProjetosController from '../../../controllers/ProjetosController';

export async function GET() {
  const projetos = await ProjetosController.listar();
  return NextResponse.json(projetos);
}

export async function POST(req: Request) {
  const data = await req.json();
  const projeto = await ProjetosController.criar(data);
  return NextResponse.json(projeto);
}
