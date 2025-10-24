import { NextRequest, NextResponse } from "next/server";
import { createProject, getProjects } from "@/controllers/projectController";

export async function GET(req: NextRequest) {
  const projects = await getProjects(req, {} as any);
  return NextResponse.json(projects);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const project = await createProject({ body }, {} as any);
  return NextResponse.json(project);
}
