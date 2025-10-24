import { NextResponse } from 'next/server';
import TarefasController from '../../../controllers/TarefasController';

export async function GET() {
  const tarefas = await TarefasController.listar();
  return NextResponse.json(tarefas);
}

export async function POST(req: Request) {
  const data = await req.json();
  const tarefa = await TarefasController.criar(data);
  return NextResponse.json(tarefa);
}
