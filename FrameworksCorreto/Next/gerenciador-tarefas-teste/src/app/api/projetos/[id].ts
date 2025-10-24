import { NextResponse } from 'next/server';
import ProjetosController from '../../../controllers/ProjetosController';

export async function PUT(req: Request, { params }: any) {
  const data = await req.json();
  const projeto = await ProjetosController.atualizar(params.id, data);
  return NextResponse.json(projeto);
}

export async function DELETE(_: Request, { params }: any) {
  const projeto = await ProjetosController.deletar(params.id);
  return NextResponse.json(projeto);
}
