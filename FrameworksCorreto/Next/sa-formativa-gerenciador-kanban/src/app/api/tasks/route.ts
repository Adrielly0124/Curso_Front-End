import { NextRequest, NextResponse } from "next/server";
import { createTask, getTasks, updateTask } from "@/controllers/taskController";

export async function GET(req: NextRequest) {
  const tasks = await getTasks(req, {} as any);
  return NextResponse.json(tasks);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const task = await createTask({ body }, {} as any);
  return NextResponse.json(task);
}

export async function PATCH(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  const body = await req.json();
  const task = await updateTask({ query: { id }, body }, {} as any);
  return NextResponse.json(task);
}
