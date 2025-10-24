import { NextResponse } from 'next/server';
import TarefasController from '../../../controllers/TarefasController';

export async function PUT(req: Request, { params }: any) {
  const data = await req.json();
  const tarefa = await TarefasController.atualizar(params.id, data);
  return NextResponse.json(tarefa);
}

export async function DELETE(_: Request, { params }: any) {
  const tarefa = await TarefasController.deletar(params.id);
  return NextResponse.json(tarefa);
}
